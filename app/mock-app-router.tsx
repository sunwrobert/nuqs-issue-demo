import React, { useMemo, useState } from 'react';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';
import { vi } from 'vitest';

type AppRouterProps = {
  children: React.ReactNode;
  pathname?: string;
};

export function MockAppRouter({ children, pathname = '/' }: AppRouterProps) {
  const [searchParams, setSearchParams] = useState(
    new URL(window.location.origin + pathname).searchParams
  );

  const value = useMemo(
    () => ({
      back: vi.fn(),
      forward: vi.fn(),
      refresh: vi.fn(),
      push: (href: string) => {
        setSearchParams(new URL(href).searchParams);
      },
      replace: (href: string) => {
        setSearchParams(new URL(href).searchParams);
      },
      prefetch: vi.fn(),
    }),
    []
  );

  return (
    <SearchParamsContext.Provider value={searchParams}>
      <AppRouterContext.Provider value={value}>
        {children}
      </AppRouterContext.Provider>
    </SearchParamsContext.Provider>
  );
}
