import React, { ReactNode } from 'react';

export default function SearchedBooks({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-7 justify-items-center gap-4 overflow-y-scroll  bg-white h-full">
      {children}
    </div>
  );
}