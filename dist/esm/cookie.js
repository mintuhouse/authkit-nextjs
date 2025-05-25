import { WORKOS_REDIRECT_URI, WORKOS_COOKIE_MAX_AGE, WORKOS_COOKIE_DOMAIN, WORKOS_COOKIE_SAMESITE, } from './env-variables.js';
function assertValidSamSite(sameSite) {
    if (!['lax', 'strict', 'none'].includes(sameSite.toLowerCase())) {
        throw new Error(`Invalid SameSite value: ${sameSite}`);
    }
}
export function getCookieOptions(redirectUri, asString = false, expired = false) {
    const url = new URL(redirectUri || WORKOS_REDIRECT_URI);
    const sameSite = WORKOS_COOKIE_SAMESITE || 'lax';
    assertValidSamSite(sameSite);
    const secure = sameSite.toLowerCase() === 'none' ? true : url.protocol === 'https:';
    const maxAge = expired ? 0 : WORKOS_COOKIE_MAX_AGE ? parseInt(WORKOS_COOKIE_MAX_AGE, 10) : 60 * 60 * 24 * 400;
    return asString
        ? `Path=/; HttpOnly; Secure=${secure}; SameSite=${sameSite}; Max-Age=${maxAge}; Domain=${WORKOS_COOKIE_DOMAIN || ''}`
        : {
            path: '/',
            httpOnly: true,
            secure,
            sameSite,
            // Defaults to 400 days, the maximum allowed by Chrome
            // It's fine to have a long cookie expiry date as the access/refresh tokens
            // act as the actual time-limited aspects of the session.
            maxAge,
            domain: WORKOS_COOKIE_DOMAIN || '',
        };
}
//# sourceMappingURL=cookie.js.map