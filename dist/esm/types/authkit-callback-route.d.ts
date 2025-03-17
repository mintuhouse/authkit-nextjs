import { NextRequest } from 'next/server';
import { HandleAuthOptions } from './interfaces.js';
export declare function handleAuth(options?: HandleAuthOptions): (request: NextRequest) => Promise<Response>;
