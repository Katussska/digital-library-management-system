import { H6 } from '../typography/H6.tsx';
import { useEffect, useState } from 'react';
import { fetchBooks } from '../../service/fetchBooks.tsx';
import Book from './Book.tsx';

interface BookType {
  title: string;
  author: string;
  publishedDate: string;
  available: boolean;
  id: number;
}

export default function BookSection({ title }: { title: string }) {
  const [books, setBooks] = useState<BookType[]>([]);

  useEffect(() => {
    const fetchAndFilterBooks = async () => {
      const allBooks = await fetchBooks('all');

      if (!allBooks) return;

      let filteredBooks: BookType[] = [];
      const titlesSet = new Set<string>();

      if (title === 'Best Sellers') {
        filteredBooks = allBooks.sort(() => 0.5 - Math.random()).filter(book => {
          if (!titlesSet.has(book.title)) {
            titlesSet.add(book.title);
            return true;
          }
          return false;
        }).slice(0, 8);
      } else if (title === 'Old But Gold') {
        filteredBooks = allBooks.filter((book: BookType) => {
          if (new Date(book.publishedDate).getFullYear() < 2000 && !titlesSet.has(book.title)) {
            titlesSet.add(book.title);
            return true;
          }
          return false;
        });
      } else if (title === 'New Arrivals') {
        filteredBooks = allBooks.filter((book: BookType) => {
          if (new Date(book.publishedDate).getFullYear() >= 2000 && !titlesSet.has(book.title)) {
            titlesSet.add(book.title);
            return true;
          }
          return false;
        });
      }

      setBooks(filteredBooks);
    };

    fetchAndFilterBooks().then(() => console.log('Books fetched and filtered'));
  }, [title]);

  return (
    <div className="bg-white flex flex-col px-5 py-2.5 items-center max-w-full mb-2.5 ">
      <H6>{title}</H6>
      <div className="flex w-full h-auto overflow-auto max-w-screen-2xl">
        {books.map((book, index) => (
          <Book key={index} title={book.title} cover={'cover.png'} available={book.available} id={book.id} />
        ))}
      </div>
    </div>
  );
}