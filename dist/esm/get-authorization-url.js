import { getWorkOS } from './workos.js';
import { WORKOS_CLIENT_ID, WORKOS_REDIRECT_URI } from './env-variables.js';
import { headers } from 'next/headers';
async function getAuthorizationUrl(options = {}) {
    const headersList = await headers();
    const { returnPathname, screenHint, organizationId, redirectUri = headersList.get('x-redirect-uri'), loginHint, } = options;
    return getWorkOS().userManagement.getAuthorizationUrl({
        provider: 'authkit',
        clientId: WORKOS_CLIENT_ID,
        redirectUri: redirectUri !== null && redirectUri !== void 0 ? redirectUri : WORKOS_REDIRECT_URI,
        state: returnPathname ? btoa(JSON.stringify({ returnPathname })) : undefined,
        screenHint,
        organizationId,
        loginHint,
    });
}
export { getAuthorizationUrl };
//# sourceMappingURL=get-authorization-url.js.map