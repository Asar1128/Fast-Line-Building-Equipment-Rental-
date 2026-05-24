import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isLoading?: boolean;
}

export const Button = React.forwardRef<
  HTMLButtonElement & HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      href,
      isLoading,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-ring disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary: 'bg-brand-500 text-navy-900 hover:bg-brand-400',
      secondary: 'bg-navy-900 text-white hover:bg-navy-800',
      ghost: 'bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white/60',
    };

    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-4 text-base',
      lg: 'h-12 px-6 text-lg',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        className={classes}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
