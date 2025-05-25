/**
 * A hook that manages access tokens with automatic refresh.
 */
export declare function useAccessToken(): {
    accessToken: string | undefined;
    loading: boolean;
    error: Error | null;
    refresh: () => Promise<string | undefined>;
};
