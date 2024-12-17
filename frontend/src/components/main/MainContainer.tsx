import { ReactNode } from 'react';

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full p-3 flex-col">
      {children}
    </div>
  );
}