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
export declare function signOut({ returnTo }?: {
    returnTo?: string;
}): Promise<void>;
export declare function switchToOrganization(organizationId: string, options?: SwitchToOrganizationOptions): Promise<UserInfo>;
