import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | undefined;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, id, className, ...props }, ref) => {
    const inputId = id || React.useId();
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className={cn('space-y-1', className)}>
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-navy-900"
        >
          {label}
          {props.required && <span aria-label="required"> *</span>}
        </label>

        <input
          ref={ref}
          id={inputId}
          className={cn(
            'block w-full rounded-md border px-4 py-3 text-sm shadow-sm transition-colors',
            error
              ? 'border-safety-500 focus:border-safety-500 focus:ring-safety-500'
              : 'border-border-light focus:border-brand-500 focus:ring-brand-500'
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            [error ? errorId : null, helperText ? helperId : null]
              .filter(Boolean)
              .join(' ') || undefined
          }
          {...props}
        />

        {helperText && (
          <p id={helperId} className="text-sm text-navy-500">
            {helperText}
          </p>
        )}

        {error && (
          <p id={errorId} className="text-sm text-safety-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
