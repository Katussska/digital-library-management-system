import { ReactNode } from 'react';
import { H6 } from '../typography/H6.tsx';

export default function FilterComponent({ title, children }: { title: string, children: ReactNode }) {
  return (
    <div className="flex flex-col w-fit ">
      <H6>{title}</H6>
      <div className="flex flex-col ml-5">
        {children}
      </div>
    </div>
  );
}