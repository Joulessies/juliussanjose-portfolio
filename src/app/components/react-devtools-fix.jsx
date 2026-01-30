'use client';

import { useEffect } from 'react';

/**
 * Fix for React DevTools semver error with React 19
 * This suppresses the "Invalid argument not valid semver" error
 * that occurs when React DevTools browser extension tries to parse React version
 * 
 * This is a known compatibility issue between React 19 and older React DevTools extensions.
 * The error doesn't affect functionality, only the DevTools integration.
 */
export function ReactDevToolsFix() {
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    // Set up error suppression immediately
    const originalError = console.error;
    const errorFilter = (...args) => {
      const errorMessage = args[0]?.toString() || '';
      // Check if this is the React DevTools semver error
      if (
        errorMessage.includes('Invalid argument not valid semver') &&
        (errorMessage.includes("'' received") || 
         errorMessage.includes("''") ||
         errorMessage.includes('react_devtools_backend'))
      ) {
        // Suppress this specific error silently
        return;
      }
      // Check for react_devtools_backend errors related to version parsing
      if (
        args.some(
          (arg) =>
            typeof arg === 'string' &&
            arg.includes('react_devtools_backend') &&
            (arg.includes('semver') || arg.includes('validateAndParse'))
        )
      ) {
        return;
      }
      originalError.apply(console, args);
    };

    // Apply the filter immediately
    console.error = errorFilter;

    // Also catch unhandled promise rejections
    const handleUnhandledRejection = (event) => {
      const errorMessage =
        event.reason?.message || event.reason?.toString() || '';
      if (
        errorMessage.includes('Invalid argument not valid semver') ||
        errorMessage.includes('react_devtools_backend')
      ) {
        event.preventDefault();
      }
    };

    // Catch window errors
    const handleError = (event) => {
      const errorMessage = event.message || event.error?.message || '';
      if (
        errorMessage.includes('Invalid argument not valid semver') ||
        (errorMessage.includes('react_devtools_backend') &&
          (errorMessage.includes('semver') || errorMessage.includes('validateAndParse')))
      ) {
        event.preventDefault();
        return false;
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      console.error = originalError;
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return null;
}
