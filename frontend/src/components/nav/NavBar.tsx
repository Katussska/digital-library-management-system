import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar.tsx';
import ProfileBadge from './ProfileBadge.tsx';
import Signing from './Signing.tsx';

export default function NavBar() {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="bg-white flex h-20 items-center w-full p-5 justify-between">
      <img className="h-full object-contain cursor-pointer" src="/logo.png" alt="logo" onClick={handleLogoClick} />
      <SearchBar />
      {user ? <ProfileBadge /> : <Signing />}
    </nav>
  );
}