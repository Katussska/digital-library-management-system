import ProfileDetails from './ProfileDetails.tsx';
import BorrowedContainer from './BorrowedContainer.tsx';
import NavBar from '../nav/NavBar.tsx';
import Sidebar from '../filter/Sidebar.tsx';
import MainContainer from '../main/MainContainer.tsx';

export default function ProfileContainer() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 max-h-full overflow-auto">
        <Sidebar />
        <MainContainer>
          <div className="flex bg-white w-full h-full p-10">
            <ProfileDetails />
            <BorrowedContainer />
          </div>
        </MainContainer>
      </div>
    </div>
  );
}