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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchedBooks() {
  const [books, setBooks] = useState<BookType[]>([]);
  const query = useQuery();
  const title = query.get('title');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`http://localhost:8080/books/search/title?title=${title}`);
        const data = await response.json();
        const uniqueBooks = Array.from(new Set(data.map((book: BookType) => book.id)))
          .map(id => data.find((book: BookType) => book.id === id));
        setBooks(uniqueBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    if (title) {
      fetchBooks().then(r => r);
    }
  }, [title]);

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