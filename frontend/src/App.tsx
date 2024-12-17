import NavBar from './components/nav/NavBar.tsx';
import Sidebar from './components/filter/Sidebar.tsx';
import MainContainer from './components/main/MainContainer.tsx';
import FilterCheckbox from './components/filter/FilterCheckbox.tsx';
import FilterComponent from './components/filter/FilterComponent.tsx';
import ProfileContainer from './components/main/profile/ProfileContainer.tsx';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 max-h-full overflow-auto">
        <Sidebar>
          <FilterComponent title={'Availability'}>
            <FilterCheckbox label={'Available'} />
            <FilterCheckbox label={'Borrowed'} />
          </FilterComponent>
          <FilterComponent title={'Genre'}>
            <FilterCheckbox label={'Horror'} />
            <FilterCheckbox label={'Sci-Fi'} />
            <FilterCheckbox label={'Fantasy'} />
            <FilterCheckbox label={'Detective'} />
          </FilterComponent>
          <FilterComponent title={'Author'}>
            <FilterCheckbox label={'Stephen King'} />
            <FilterCheckbox label={'Isaac Asimov'} />
            <FilterCheckbox label={'J.R.R. Tolkien'} />
            <FilterCheckbox label={'Agatha Christie'} />
          </FilterComponent>
          <FilterComponent title={'Language'}>
            <FilterCheckbox label={'English'} />
            <FilterCheckbox label={'Spanish'} />
            <FilterCheckbox label={'French'} />
            <FilterCheckbox label={'German'} />
          </FilterComponent>
          <FilterComponent title={'Publisher'}>
            <FilterCheckbox label={'Penguin Random House'} />
            <FilterCheckbox label={'HarperCollins'} />
            <FilterCheckbox label={'Simon & Schuster'} />
            <FilterCheckbox label={'Macmillan'} />
          </FilterComponent>
          <FilterComponent title={'Rating'}>
            <FilterCheckbox label={'⭐️⭐️⭐️⭐️⭐️'} />
            <FilterCheckbox label={'⭐️⭐️⭐️⭐️'} />
            <FilterCheckbox label={'⭐️⭐️⭐️'} />
          </FilterComponent>
        </Sidebar>
        <MainContainer>
          <ProfileContainer />
          {/*<SearchedBooks>*/}
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
          {/*</SearchedBooks>*/}
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