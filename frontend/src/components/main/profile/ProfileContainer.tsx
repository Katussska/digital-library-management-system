import ProfileDetails from './ProfileDetails';
import BorrowedContainer from './BorrowedContainer.tsx';

export default function ProfileContainer() {
  return (
    <div className="flex bg-white w-full h-full p-10">
      <ProfileDetails />
      <BorrowedContainer />
    </div>
  );
}