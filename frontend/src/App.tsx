import NavBar from './components/nav/NavBar.tsx';
import Sidebar from './components/filter/Sidebar.tsx';
import MainContainer from './components/main/MainContainer.tsx';
import BookSection from './components/main/BookSection.tsx';
import Book from './components/main/Book.tsx';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 max-h-full overflow-auto">
        <Sidebar />
        <MainContainer>
          <BookSection title="Best Sellers">
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
          </BookSection>
          <BookSection title="Old But Gold">
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
          </BookSection>
          <BookSection title="New Arrivals">
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
          </BookSection>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;