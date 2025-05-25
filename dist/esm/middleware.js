import { updateSessionMiddleware, updateSession } from './session.js';
import { WORKOS_REDIRECT_URI } from './env-variables.js';
export function authkitMiddleware({ debug = false, middlewareAuth = { enabled: false, unauthenticatedPaths: [] }, redirectUri = WORKOS_REDIRECT_URI, signUpPaths = [], } = {}) {
    return function (request) {
        return updateSessionMiddleware(request, debug, middlewareAuth, redirectUri, signUpPaths);
    };
}
export async function authkit(request, options = {}) {
    return await updateSession(request, options);
}
//# sourceMappingURL=middleware.js.map