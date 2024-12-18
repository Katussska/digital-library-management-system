import { useEffect, useState } from 'react';
import BorrowedBook from './BorrowedBook.tsx';

interface LoanType {
  id: number;
  bookName: string;
  loanDate: string;
}

export default function BorrowedContainer() {
  const [loans, setLoans] = useState<LoanType[]>([]);

  useEffect(() => {
    const fetchLoans = async () => {
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      const userId = userData.id;

      if (!userId) {
        console.error('User ID is missing');
        return;
      }

      try {
        const response = await fetch(`http://localhost:8080/loans/${userId}`);
        const data = await response.json();
        setLoans(data);
      } catch (error) {
        console.error('Error fetching loans:', error);
      }
    };

    fetchLoans().then(r => console.log('Loans fetched:', r));
  }, []);

  return (
    <div className="flex h-full flex-col w-1/2 p-10">
      <h1 className="text-2xl font-bold text-center mb-5">Borrowed Books</h1>
      <div className="flex flex-col overflow-scroll border-2 border-blue-600">
        {loans.map((loan) => (
          <BorrowedBook key={loan.id} title={loan.bookName} loanDate={loan.loanDate} />
        ))}
      </div>
    </div>
  );
}