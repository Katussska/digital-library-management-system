import { useEffect, useState } from 'react';
import NavBar from '../nav/NavBar.tsx';
import Sidebar from '../filter/Sidebar.tsx';
import MainContainer from './MainContainer.tsx';
import { useParams } from 'react-router-dom';

interface BookType {
  title: string;
  author: string;
  publishedDate: string;
  available: boolean;
  id: number;
  genre: string;
  rating: number;
  publisher: string;
  pageCount: number;
  description: string;
  language: string;
}

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState<BookType | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:8080/books/${id}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBook().then(r => console.log('Book fetched:', r));
  }, [id]);

  const handleBorrow = async () => {
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = userData.id;
    const bookId = id;

    if (!userId || !bookId) {
      console.error('User ID or Book ID is missing');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/loans?userId=` + userId + '&bookId=' + id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('Book borrowed successfully');
      window.location.reload(); // Refresh the page
    } catch (error) {
      console.error('Error borrowing book:', error);
    }
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 max-h-full overflow-auto">
        <Sidebar />
        <MainContainer>
          <div className="flex bg-white w-full h-full p-36 items-center">
            <div className="w-2/5 h-full flex items-center">
              <img src="/cover.png" alt="book cover" className="h-auto w-fit object-contain" />
            </div>
            <div className="flex flex-col w-full h-full items-center justify-around p-20">
              <h1 className="text-5xl font-extrabold dark:text-white">{book.title}</h1>
              <h2 className="text-4xl font-bold dark:text-white">by {book.author}</h2>
              <h3>Genre: <strong>{book.genre}</strong></h3>
              <h3>Language: <strong>{book.language}</strong></h3>
              <p>Published: <strong>{book.publishedDate}</strong></p>
              <p>Available: <strong>{book.available ? 'Available' : 'Borrowed'}</strong></p>
              <p>Rating: <strong>{book.rating}</strong></p>
              <p>Publisher: <strong>{book.publisher}</strong></p>
              <p>Pages: <strong>{book.pageCount}</strong></p>
              <p><strong>Description: </strong></p>
              <p className="text-center">{book.description}</p>
              <button type="button"
                      className={`focus:outline-none text-white ${book.available ? 'bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300' : 'bg-gray-500 cursor-not-allowed'} font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900`}
                      onClick={book.available ? handleBorrow : undefined}
                      disabled={!book.available}>
                {book.available ? 'Borrow' : 'Not Available'}
              </button>
            </div>
          </div>
        </MainContainer>
      </div>
    </div>
  );
}