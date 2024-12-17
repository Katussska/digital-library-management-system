import { H6 } from '../typography/H6.tsx';
import { ReactNode } from 'react';

export default function BookSection({ title, children }: { title: string, children: ReactNode }) {
  return (
    <div className="bg-white flex flex-col px-5 py-2.5 items-center max-w-full mb-2.5 ">
      <H6>{title}</H6>
      <div className="flex w-full h-auto overflow-auto max-w-screen-2xl">
        {children}
      </div>
    </div>
  );
}