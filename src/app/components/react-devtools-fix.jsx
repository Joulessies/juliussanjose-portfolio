'use client';

import { useEffect } from 'react';

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const _originalError = console.error.bind(console);
  console.error = (...args) => {
    const msg = args[0]?.toString() ?? '';

    if (
      msg.includes('Invalid argument not valid semver') &&
      (msg.includes("''") || msg.includes('react_devtools_backend'))
    ) return;

    if (
      args.some(
        (a) =>
          typeof a === 'string' &&
          a.includes('react_devtools_backend') &&
          (a.includes('semver') || a.includes('validateAndParse'))
      )
    ) return;

    if (msg.includes('An empty string') && msg.includes('href')) return;

    _originalError(...args);
  };
}

export function ReactDevToolsFix() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    // Catch unhandled promise rejections from DevTools extension
    const handleUnhandledRejection = (event) => {
      const msg = event.reason?.message || event.reason?.toString() || '';
      if (
        msg.includes('Invalid argument not valid semver') ||
        msg.includes('react_devtools_backend')
      ) {
        event.preventDefault();
      }
    };

    // Catch window-level errors from DevTools extension
    const handleError = (event) => {
      const msg = event.message || event.error?.message || '';
      if (
        msg.includes('Invalid argument not valid semver') ||
        (msg.includes('react_devtools_backend') &&
          (msg.includes('semver') || msg.includes('validateAndParse')))
      ) {
        event.preventDefault();
        return false;
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return null;
}
