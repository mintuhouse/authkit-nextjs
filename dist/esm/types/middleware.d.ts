import { NextMiddleware, NextRequest } from 'next/server';
import { AuthkitMiddlewareOptions, AuthkitOptions, AuthkitResponse } from './interfaces.js';
export declare function authkitMiddleware({ debug, middlewareAuth, redirectUri, signUpPaths, }?: AuthkitMiddlewareOptions): NextMiddleware;
export declare function authkit(request: NextRequest, options?: AuthkitOptions): Promise<AuthkitResponse>;
