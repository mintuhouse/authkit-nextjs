import { NextRequest } from 'next/server';
import { AuthkitMiddlewareAuth, AuthkitOptions, AuthkitResponse, NoUserInfo, Session, UserInfo } from './interfaces.js';
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
export { encryptSession, withAuth, refreshSession, terminateSession, updateSessionMiddleware, updateSession };
