import React, { ReactNode } from 'react';
import type { Impersonator, User } from '@workos-inc/node';
import type { UserInfo, SwitchToOrganizationOptions } from '../interfaces.js';
type AuthContextType = {
    user: User | null;
    sessionId: string | undefined;
    organizationId: string | undefined;
    role: string | undefined;
    permissions: string[] | undefined;
    entitlements: string[] | undefined;
    impersonator: Impersonator | undefined;
    loading: boolean;
    getAuth: (options?: {
        ensureSignedIn?: boolean;
    }) => Promise<void>;
    refreshAuth: (options?: {
        ensureSignedIn?: boolean;
        organizationId?: string;
    }) => Promise<void | {
        error: string;
    }>;
    signOut: (options?: {
        returnTo?: string;
    }) => Promise<void>;
    switchToOrganization: (organizationId: string, options?: SwitchToOrganizationOptions) => Promise<Omit<UserInfo, 'accessToken'> | {
        error: string;
    }>;
};
interface AuthKitProviderProps {
    children: ReactNode;
    /**
     * Customize what happens when a session is expired. By default,the entire page will be reloaded.
     * You can also pass this as `false` to disable the expired session checks.
     */
    onSessionExpired?: false | (() => void);
}
export declare const AuthKitProvider: ({ children, onSessionExpired }: AuthKitProviderProps) => React.JSX.Element;
export declare function useAuth(options: {
    ensureSignedIn: true;
}): AuthContextType & ({
    loading: true;
    user: User | null;
} | {
    loading: false;
    user: User;
});
export declare function useAuth(options?: {
    ensureSignedIn?: false;
}): AuthContextType;
export {};
