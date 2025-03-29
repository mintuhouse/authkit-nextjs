'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { checkSessionAction, getAuthAction, handleSignOutAction, refreshAuthAction, switchToOrganizationAction, } from '../actions.js';
const AuthContext = createContext(undefined);
export const AuthKitProvider = ({ children, onSessionExpired }) => {
    const [user, setUser] = useState(null);
    const [sessionId, setSessionId] = useState(undefined);
    const [organizationId, setOrganizationId] = useState(undefined);
    const [role, setRole] = useState(undefined);
    const [permissions, setPermissions] = useState(undefined);
    const [entitlements, setEntitlements] = useState(undefined);
    const [impersonator, setImpersonator] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const getAuth = async ({ ensureSignedIn = false } = {}) => {
        setLoading(true);
        try {
            const auth = await getAuthAction({ ensureSignedIn });
            setUser(auth.user);
            setSessionId(auth.sessionId);
            setOrganizationId(auth.organizationId);
            setRole(auth.role);
            setPermissions(auth.permissions);
            setEntitlements(auth.entitlements);
            setImpersonator(auth.impersonator);
        }
        catch (error) {
            setUser(null);
            setSessionId(undefined);
            setOrganizationId(undefined);
            setRole(undefined);
            setPermissions(undefined);
            setEntitlements(undefined);
            setImpersonator(undefined);
        }
        finally {
            setLoading(false);
        }
    };
    const switchToOrganization = async (organizationId, options = {}) => {
        const opts = { revalidationStrategy: 'none', ...options };
        const result = await switchToOrganizationAction(organizationId, {
            revalidationStrategy: 'none',
            ...options,
        });
        if (opts.revalidationStrategy === 'none') {
            await getAuth({ ensureSignedIn: true });
        }
        return result;
    };
    const refreshAuth = async ({ ensureSignedIn = false, organizationId, } = {}) => {
        try {
            setLoading(true);
            const auth = await refreshAuthAction({ ensureSignedIn, organizationId });
            setUser(auth.user);
            setSessionId(auth.sessionId);
            setOrganizationId(auth.organizationId);
            setRole(auth.role);
            setPermissions(auth.permissions);
            setEntitlements(auth.entitlements);
            setImpersonator(auth.impersonator);
        }
        catch (error) {
            return error instanceof Error ? { error: error.message } : { error: String(error) };
        }
        finally {
            setLoading(false);
        }
    };
    const signOut = async ({ returnTo } = {}) => {
        await handleSignOutAction({ returnTo });
    };
    useEffect(() => {
        getAuth();
        // Return early if the session expired checks are disabled.
        if (onSessionExpired === false) {
            return;
        }
        let visibilityChangedCalled = false;
        const handleVisibilityChange = async () => {
            if (visibilityChangedCalled) {
                return;
            }
            // In the case where we're using middleware auth mode, a user that has signed out in a different tab
            // will run into an issue if they attempt to hit a server action in the original tab.
            // This will force a refresh of the page in that case, which will redirect them to the sign-in page.
            if (document.visibilityState === 'visible') {
                visibilityChangedCalled = true;
                try {
                    const hasSession = await checkSessionAction();
                    if (!hasSession) {
                        throw new Error('Session expired');
                    }
                }
                catch (error) {
                    // 'Failed to fetch' is the error we are looking for if the action fails
                    // If any other error happens, for other reasons, we should not reload the page
                    if (error instanceof Error && error.message.includes('Failed to fetch')) {
                        if (onSessionExpired) {
                            onSessionExpired();
                        }
                        else {
                            window.location.reload();
                        }
                    }
                }
                finally {
                    visibilityChangedCalled = false;
                }
            }
        };
        window.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('focus', handleVisibilityChange);
        return () => {
            window.removeEventListener('focus', handleVisibilityChange);
            window.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [onSessionExpired]);
    return (React.createElement(AuthContext.Provider, { value: {
            user,
            sessionId,
            organizationId,
            role,
            permissions,
            entitlements,
            impersonator,
            loading,
            getAuth,
            refreshAuth,
            signOut,
            switchToOrganization,
        } }, children));
};
export function useAuth({ ensureSignedIn = false } = {}) {
    const context = useContext(AuthContext);
    useEffect(() => {
        if (context && ensureSignedIn && !context.user && !context.loading) {
            context.getAuth({ ensureSignedIn });
        }
    }, [ensureSignedIn, context === null || context === void 0 ? void 0 : context.user, context === null || context === void 0 ? void 0 : context.loading, context === null || context === void 0 ? void 0 : context.getAuth]);
    if (!context) {
        throw new Error('useAuth must be used within an AuthKitProvider');
    }
    return context;
}
//# sourceMappingURL=authkit-provider.js.map