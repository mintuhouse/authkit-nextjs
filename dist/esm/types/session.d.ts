import { NextRequest } from 'next/server';
import { AuthkitMiddlewareAuth, AuthkitOptions, AuthkitResponse, NoUserInfo, Session, UserInfo } from './interfaces.js';
import type { AuthenticationResponse } from '@workos-inc/node';
declare function encryptSession(session: Session): Promise<string>;
declare function updateSessionMiddleware(request: NextRequest, debug: boolean, middlewareAuth: AuthkitMiddlewareAuth, redirectUri: string, signUpPaths: string[]): Promise<Response>;
declare function updateSession(request: NextRequest, options?: AuthkitOptions): Promise<AuthkitResponse>;
declare function refreshSession(options: {
    organizationId?: string;
    ensureSignedIn: true;
}): Promise<UserInfo>;
declare function refreshSession(options?: {
    organizationId?: string;
    ensureSignedIn?: boolean;
}): Promise<UserInfo | NoUserInfo>;
declare function withAuth(options: {
    ensureSignedIn: true;
}): Promise<UserInfo>;
declare function withAuth(options?: {
    ensureSignedIn?: true | false;
}): Promise<UserInfo | NoUserInfo>;
declare function terminateSession({ returnTo }?: {
    returnTo?: string;
}): Promise<void>;
/**
 * Saves a WorkOS session to a cookie for use with AuthKit.
 *
 * This function is intended for advanced use cases where you need to manually manage sessions,
 * such as custom authentication flows (email verification, etc.) that don't use
 * the standard AuthKit authentication flow.
 *
 * @param sessionOrResponse The WorkOS session or AuthenticationResponse containing access token, refresh token, and user information.
 * @param request Either a NextRequest object or a URL string, used to determine cookie settings.
 *
 * @example
 * // With a NextRequest object
 * import { saveSession } from '@workos-inc/authkit-nextjs';
 *
 * async function handleEmailVerification(req: NextRequest) {
 *   const { code } = await req.json();
 *   const authResponse = await workos.userManagement.authenticateWithEmailVerification({
 *     clientId: process.env.WORKOS_CLIENT_ID,
 *     code,
 *   });
 *
 *   await saveSession(authResponse, req);
 * }
 *
 * @example
 * // With a URL string
 * await saveSession(authResponse, 'https://example.com/callback');
 */
export declare function saveSession(sessionOrResponse: Session | AuthenticationResponse, request: NextRequest | string): Promise<void>;
export { encryptSession, refreshSession, terminateSession, updateSession, updateSessionMiddleware, withAuth };
