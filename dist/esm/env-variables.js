/* istanbul ignore file */
var _a, _b, _c, _d;
function getEnvVariable(name) {
    return process.env[name];
}
// Optional env variables
const WORKOS_API_HOSTNAME = getEnvVariable('WORKOS_API_HOSTNAME');
const WORKOS_API_HTTPS = getEnvVariable('WORKOS_API_HTTPS');
const WORKOS_API_PORT = getEnvVariable('WORKOS_API_PORT');
const WORKOS_COOKIE_DOMAIN = getEnvVariable('WORKOS_COOKIE_DOMAIN');
const WORKOS_COOKIE_MAX_AGE = getEnvVariable('WORKOS_COOKIE_MAX_AGE');
const WORKOS_COOKIE_NAME = getEnvVariable('WORKOS_COOKIE_NAME');
const WORKOS_COOKIE_SAMESITE = getEnvVariable('WORKOS_COOKIE_SAMESITE');
// Required env variables
const WORKOS_API_KEY = (_a = getEnvVariable('WORKOS_API_KEY')) !== null && _a !== void 0 ? _a : '';
const WORKOS_CLIENT_ID = (_b = getEnvVariable('WORKOS_CLIENT_ID')) !== null && _b !== void 0 ? _b : '';
const WORKOS_COOKIE_PASSWORD = (_c = getEnvVariable('WORKOS_COOKIE_PASSWORD')) !== null && _c !== void 0 ? _c : '';
const WORKOS_REDIRECT_URI = (_d = process.env.NEXT_PUBLIC_WORKOS_REDIRECT_URI) !== null && _d !== void 0 ? _d : '';
export { WORKOS_API_HOSTNAME, WORKOS_API_HTTPS, WORKOS_API_KEY, WORKOS_API_PORT, WORKOS_CLIENT_ID, WORKOS_COOKIE_DOMAIN, WORKOS_COOKIE_MAX_AGE, WORKOS_COOKIE_NAME, WORKOS_COOKIE_PASSWORD, WORKOS_REDIRECT_URI, WORKOS_COOKIE_SAMESITE, };
//# sourceMappingURL=env-variables.js.map