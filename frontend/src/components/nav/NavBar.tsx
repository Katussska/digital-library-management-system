import SearchBar from './SearchBar.tsx';
import Signing from './Signing.tsx';

export default function NavBar() {
  return (
    <nav className="bg-white flex h-20 items-center w-full p-5 justify-between">
      <img className="h-full object-contain" src="logo.png" alt="logo" />
      <SearchBar />
      {/*<ProfileBadge />*/}
      <Signing />
    </nav>
  );
}