import { NoUserInfo, UserInfo, SwitchToOrganizationOptions } from './interfaces.js';
/**
 * This action is only accessible to authenticated users,
 * there is no need to check the session here as the middleware will
 * be responsible for that.
 */
export declare const checkSessionAction: () => Promise<boolean>;
export declare const handleSignOutAction: ({ returnTo }?: {
    returnTo?: string;
}) => Promise<void>;
export declare const getOrganizationAction: (organizationId: string) => Promise<import("@workos-inc/node").Organization>;
export declare const getAuthAction: (options?: {
    ensureSignedIn?: boolean;
}) => Promise<Omit<UserInfo | NoUserInfo, "accessToken">>;
export declare const refreshAuthAction: ({ ensureSignedIn, organizationId, }: {
    ensureSignedIn?: boolean;
    organizationId?: string;
}) => Promise<Omit<UserInfo | NoUserInfo, "accessToken">>;
export declare const switchToOrganizationAction: (organizationId: string, options?: SwitchToOrganizationOptions) => Promise<Omit<UserInfo, "accessToken">>;
