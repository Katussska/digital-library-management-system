import { H4 } from '../typography/H4.tsx';

export default function Sidebar({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white p-5 flex mt-1 w-1/6 flex-col  justify-between ">
      <H4>Filter</H4>
      {children}
      <button type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit
      </button>
    </div>

  );
}