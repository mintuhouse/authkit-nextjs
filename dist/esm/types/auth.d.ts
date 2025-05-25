import { SwitchToOrganizationOptions, UserInfo } from './interfaces.js';
export declare function getSignInUrl({ organizationId, loginHint, redirectUri, }?: {
    organizationId?: string;
    loginHint?: string;
    redirectUri?: string;
}): Promise<string>;
export declare function getSignUpUrl({ organizationId, loginHint, redirectUri, }?: {
    organizationId?: string;
    loginHint?: string;
    redirectUri?: string;
}): Promise<string>;
/**
 * Sign out the user and delete the session cookie.
 * @param options Options for signing out.
 * @param options.returnTo The URL to redirect to after signing out.
 */
export declare function signOut({ returnTo }?: {
    returnTo?: string;
}): Promise<void>;
export declare function switchToOrganization(organizationId: string, options?: SwitchToOrganizationOptions): Promise<UserInfo>;
