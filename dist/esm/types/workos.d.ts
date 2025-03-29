import { WorkOS } from '@workos-inc/node';
export declare const VERSION = "2.2.0";
/**
 * Create a WorkOS instance with the provided API key and options.
 * If an instance already exists, it returns the existing instance.
 * @returns The WorkOS instance.
 */
export declare const getWorkOS: () => WorkOS;
