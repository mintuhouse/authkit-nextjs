import { NextResponse } from 'next/server';
export function redirectWithFallback(redirectUri, headers) {
    const newHeaders = headers ? new Headers(headers) : new Headers();
    newHeaders.set('Location', redirectUri);
    // Fall back to standard Response if NextResponse is not available.
    // This is to support Next.js 13.
    return (NextResponse === null || NextResponse === void 0 ? void 0 : NextResponse.redirect)
        ? NextResponse.redirect(redirectUri, { headers })
        : new Response(null, { status: 307, headers: newHeaders });
}
export function errorResponseWithFallback(errorBody) {
    // Fall back to standard Response if NextResponse is not available.
    // This is to support Next.js 13.
    return (NextResponse === null || NextResponse === void 0 ? void 0 : NextResponse.json)
        ? NextResponse.json(errorBody, { status: 500 })
        : new Response(JSON.stringify(errorBody), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
}
/**
 * Returns a function that can only be called once.
 * Subsequent calls will return the result of the first call.
 * This is useful for lazy initialization.
 * @param fn - The function to be called once.
 * @returns A function that can only be called once.
 */
export function lazy(fn) {
    let called = false;
    let result;
    return () => {
        if (!called) {
            result = fn();
            called = true;
        }
        return result;
    };
}
//# sourceMappingURL=utils.js.map