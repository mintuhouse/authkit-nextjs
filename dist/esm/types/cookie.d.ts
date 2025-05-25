import { CookieOptions } from './interfaces.js';
export declare function getCookieOptions(): CookieOptions;
export declare function getCookieOptions(redirectUri?: string | null): CookieOptions;
export declare function getCookieOptions(redirectUri: string | null | undefined, asString: true, expired?: boolean): string;
export declare function getCookieOptions(redirectUri: string | null | undefined, asString: false, expired?: boolean): CookieOptions;
export declare function getCookieOptions(redirectUri?: string | null, asString?: boolean, expired?: boolean): CookieOptions | string;
