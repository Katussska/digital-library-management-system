import NavBar from './components/nav/NavBar.tsx';
import Sidebar from './components/filter/Sidebar.tsx';
import MainContainer from './components/main/MainContainer.tsx';
import BookSection from './components/main/BookSection.tsx';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 max-h-full overflow-auto">
        <Sidebar />
        <MainContainer>
          <BookSection title="Best Sellers" />
          <BookSection title="Old But Gold" />
          <BookSection title="New Arrivals" />
        </MainContainer>
      </div>
    </div>
  );
}

export default App;