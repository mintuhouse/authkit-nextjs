import * as React from 'react';
const Button = React.forwardRef((props, forwardedRef) => {
    return (React.createElement("button", { ref: forwardedRef, type: "button", ...props, style: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            height: '1.714em',
            padding: '0 0.6em',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            borderRadius: 'min(max(calc(var(--wi-s) * 0.6), 1px), 7px)',
            border: 'none',
            backgroundColor: 'var(--wi-c)',
            color: 'white',
            ...props.style,
        } }));
});
Button.displayName = 'Button';
export { Button };
//# sourceMappingURL=button.js.map