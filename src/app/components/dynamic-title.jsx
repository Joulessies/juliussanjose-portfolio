'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function DynamicTitle() {
  const pathname = usePathname();

  const getPageTitle = (path) => {
    switch (path) {
      case '/':
        return 'Home | Julius San Jose';
      case '/works':
        return 'Works | Julius San Jose';
      case '/about':
        return 'About | Julius San Jose';
      default:
        return 'Julius San Jose - Portfolio';
    }
  };

  useEffect(() => {
    const baseTitle = getPageTitle(pathname);
    document.title = baseTitle;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = `Come back! 👋 | ${baseTitle}`;
      } else {
        document.title = baseTitle;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [pathname]);

  return null;
}
