import { useNavigate } from 'react-router-dom';

export default function Book({ title, cover, available, id }: {
  title: string,
  cover: string,
  available: boolean,
  id: number
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${id}`);
  };

  return (
    <div
      className="flex flex-col min-w-44 w-44 max-h-60 bg-white rounded-lg border-2 border-blue-600 p-3 m-1.5 items-center">
      <img src={cover} alt="book cover" className="w-full h-3/4 object-contain" />
      <div className="flex flex-col p-2 items-center text-center h-1/4 justify-center">
        <h6 className="text-sm font-semibold">{title}</h6>
      </div>
      <button
        type="button"
        className={`focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${
          available
            ? 'bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
            : 'bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
        }`}
        onClick={handleClick}
      >
        {available ? 'Available' : 'Borrowed'}
      </button>
    </div>
  );
}