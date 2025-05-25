'use server';
import { signOut, switchToOrganization } from './auth.js';
import { refreshSession, withAuth } from './session.js';
import { getWorkOS } from './workos.js';
/**
 * This function is used to sanitize the auth object.
 * Remove the accessToken from the auth object as it is not needed on the client side.
 * @param value - The auth object to sanitize
 * @returns The sanitized auth object
 */
function sanitize(value) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { accessToken, ...sanitized } = value;
    return sanitized;
}
/**
 * This action is only accessible to authenticated users,
 * there is no need to check the session here as the middleware will
 * be responsible for that.
 */
export const checkSessionAction = async () => {
    return true;
};
export const handleSignOutAction = async ({ returnTo } = {}) => {
    await signOut({ returnTo });
};
export const getOrganizationAction = async (organizationId) => {
    return await getWorkOS().organizations.getOrganization(organizationId);
};
export const getAuthAction = async (options) => {
    return sanitize(await withAuth(options));
};
export const refreshAuthAction = async ({ ensureSignedIn, organizationId, }) => {
    return sanitize(await refreshSession({ ensureSignedIn, organizationId }));
};
export const switchToOrganizationAction = async (organizationId, options) => {
    return sanitize(await switchToOrganization(organizationId, options));
};
/**
 * This action is used to get the access token from the auth object.
 * It is used to fetch the access token from the server.
 */
export async function getAccessTokenAction() {
    const auth = await withAuth();
    return auth.accessToken;
}
/**
 * This action is used to refresh the access token from the auth object.
 * It is used to fetch the access token from the server.
 */
export async function refreshAccessTokenAction() {
    const auth = await refreshSession();
    return auth.accessToken;
}
//# sourceMappingURL=actions.js.map