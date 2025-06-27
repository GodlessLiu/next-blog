'use client';
import { unstable_ViewTransition as ViewTransition } from 'react';

export function ViewTransiationProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>
        {`
            ::view-transition-old(.slow-fade) {
                animation-duration: 500ms;
            }
            ::view-transition-new(.slow-fade) {
                animation-duration: 500ms;
            }
        `}
      </style>
      <ViewTransition default="slow-fade">{children}</ViewTransition>
    </>
  );
}
