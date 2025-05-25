'use client';
import * as React from 'react';
import { Button } from './button.js';
export function MinMaxButton({ children, minimizedValue }) {
    return (React.createElement(Button, { onClick: () => {
            const root = document.querySelector('[data-workos-impersonation-root]');
            root === null || root === void 0 ? void 0 : root.style.setProperty('--wi-minimized', minimizedValue);
        }, style: { padding: 0, width: '1.714em' } }, children));
}
//# sourceMappingURL=min-max-button.js.map