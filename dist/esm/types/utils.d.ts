export declare function redirectWithFallback(redirectUri: string, headers?: Headers): Response;
export declare function errorResponseWithFallback(errorBody: {
    error: {
        message: string;
        description: string;
    };
}): Response;
/**
 * Returns a function that can only be called once.
 * Subsequent calls will return the result of the first call.
 * This is useful for lazy initialization.
 * @param fn - The function to be called once.
 * @returns A function that can only be called once.
 */
export declare function lazy<T>(fn: () => T): () => T;
