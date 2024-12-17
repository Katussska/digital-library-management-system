import NavBar from '../nav/NavBar.tsx';
import Sidebar from '../filter/Sidebar.tsx';
import MainContainer from './MainContainer.tsx';

export default function BookDetail() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 max-h-full overflow-auto">
        <Sidebar />
        <MainContainer>
          <div className="flex bg-white w-full h-full p-36 items-center">
            <div className=" w-2/5 h-full flex items-center">
              <img src="cover.png" alt="book cover" className=" h-auto w-fit object-contain" />
            </div>
            <div className="flex flex-col w-full h-full items-center justify-around p-20 item ">
              <h1 className="text-5xl font-extrabold dark:text-white">Atomic Habits</h1>
              <h2 className="text-4xl font-bold dark:text-white">by James Clear</h2>
              <h3>Genres: <strong>Self-help</strong></h3>
              <p>Published: <strong>October 16, 201</strong></p>
              <p>Available: <strong>Available</strong></p>
              <p>Rating: <strong>4.5</strong></p>
              <p>Publisher: <strong>Avery</strong></p>
              <p>Pages: <strong>319</strong></p>
              <p><strong>Description: </strong></p>
              <p className="text-center">Atomic Habits by James Clear is a comprehensive, practical guide on how to
                change
                your habits and get 1% better every day. Using a framework called the Four Laws of Behavior Change,
                Atomic
                Habits teaches readers a simple set of rules for creating good habits and breaking bad ones.</p>
              <button type="button"
                      className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                Borrow
              </button>
            </div>
          </div>
        </MainContainer>
      </div>
    </div>


  );
}