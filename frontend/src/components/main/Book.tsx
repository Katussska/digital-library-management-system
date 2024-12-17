export default function Book({ title, cover }: { title: string, cover: string }) {
  return (
    <div
      className="flex flex-col min-w-44 w-44 max-h-60 bg-white rounded-lg border-2 border-blue-600 p-3 m-3 items-center">
      <img src={cover} alt="book cover" className="w-full h-3/4 object-contain" />
      <div className="flex flex-col p-2 items-center text-center h-1/4 justify-center">
        <h6 className="text-sm font-semibold">{title}</h6>
      </div>
      <button type="button"
              className=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Available
      </button>
    </div>
  );
}