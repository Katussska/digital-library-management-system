import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProfileBadge() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    setUser({
      name: userData.name || 'N/A',
      email: userData.email || 'N/A',
    });
  }, []);

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="font-medium dark:text-white flex flex-col items-end">
          <div>{user.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer" onClick={handleLogout}>Log out</div>
        </div>
        <img className="w-10 h-10 rounded-full cursor-pointer" src="/avatar.png" alt="avatar"
             onClick={handleProfileClick} />
      </div>
    </div>
  );
}