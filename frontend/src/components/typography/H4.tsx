import { ReactNode } from 'react';

export function H4({ children }: { children: ReactNode }) {
  return (
    <h5 className="text-2xl font-bold dark:text-white">{children}</h5>
  );
}