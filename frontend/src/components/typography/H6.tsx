import { ReactNode } from 'react';

export function H6({ children }: { children: ReactNode }) {
  return (
    <h6 className="text-lg font-bold dark:text-white mb-2">{children}</h6>
  );
}