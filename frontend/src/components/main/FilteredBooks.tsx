import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../nav/NavBar.tsx';
import Sidebar from '../filter/Sidebar.tsx';
import MainContainer from './MainContainer.tsx';
import Book from './Book.tsx';

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
}

export default function FilteredBooks() {
  const [books, setBooks] = useState<BookType[]>([]);
  const location = useLocation();

  useEffect(() => {
    const fetchBooks = async () => {
      const params = new URLSearchParams(location.search);
      const response = await fetch(`http://localhost:8080/books/filter?${params.toString()}`);
      const data = await response.json();
      setBooks(data);
    };

    fetchBooks().then(r => r);
  }, [location.search]);

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 max-h-full overflow-auto">
        <Sidebar />
        <MainContainer>
          <div className="grid grid-cols-7 justify-items-center gap-4 overflow-y-scroll bg-white h-full">
            {books.map((book, index) => (
              <Book key={index} title={book.title} cover={'cover.png'} available={book.available} id={book.id} />
            ))}
          </div>
        </MainContainer>
      </div>
    </div>
  );
}