import NavBar from './components/nav/NavBar.tsx';
import Sidebar from './components/filter/Sidebar.tsx';
import MainContainer from './components/main/MainContainer.tsx';
import Register from './components/auth/Register.tsx';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 max-h-full overflow-auto">
        <Sidebar />
        <MainContainer>
          <Register />
          {/*<ProfileContainer />*/}
          {/*<SearchedBooks />*/}
          {/*<BookDetail title="Atomic Habits" cover="cover.png" genre="Self-help"*/}
          {/*            author="James Clear"*/}
          {/*            publisher="Avery"*/}
          {/*            rating={4.5}*/}
          {/*            available="available"*/}
          {/*            publishedDate="October 16, 2018"*/}
          {/*            description="Atomic Habits by James Clear is a comprehensive, practical guide on how to change your habits and get 1% better every day. Using a framework called the Four Laws of Behavior Change, Atomic Habits teaches readers a simple set of rules for creating good habits and breaking bad ones."*/}
          {/*            numberOfPages={319}*/}
          {/*/>*/}
          {/*<BookSection title="Best Sellers">*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits And Its Function" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits And Its Function" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*</BookSection>*/}
          {/*<BookSection title="Old But Gold">*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits And Its Function" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits And Its Function" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*</BookSection>*/}
          {/*<BookSection title="New Arrivals">*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits And Its Function" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits And Its Function" cover="cover.png" />*/}
          {/*  <Book title="Atomic Habits" cover="cover.png" />*/}
          {/*</BookSection>*/}
        </MainContainer>
      </div>
    </div>
  );
}

export default App;