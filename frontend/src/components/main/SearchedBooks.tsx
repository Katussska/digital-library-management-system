import Book from './Book.tsx';
import NavBar from '../nav/NavBar.tsx';
import Sidebar from '../filter/Sidebar.tsx';
import MainContainer from './MainContainer.tsx';

export default function SearchedBooks() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 max-h-full overflow-auto">
        <Sidebar />
        <MainContainer>
          <div className="grid grid-cols-7 justify-items-center gap-4 overflow-y-scroll  bg-white h-full">
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits And Its Function" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits And Its Function" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits And Its Function" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits And Its Function" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits And Its Function" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits And Its Function" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits And Its Function" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits And Its Function" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits And Its Function" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits And Its Function" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits And Its Function" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
            <Book title="Atomic Habits And Its Function" cover="cover.png" />
            <Book title="Atomic Habits" cover="cover.png" />
          </div>
        </MainContainer>
      </div>
    </div>

  );
}