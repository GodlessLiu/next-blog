'use client';

import { ProgressProvider } from '@bprogress/next/app';

export function ProgressBarProvider({ children }: { children: React.ReactNode }) {
  return (
    <ProgressProvider color="var(--foreground)" height="6px" options={{ showSpinner: false }} shallowRouting>
      {children}
    </ProgressProvider>
  );
}
