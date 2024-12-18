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

  return (
    <div>
      <div className="flex items-center gap-4 cursor-pointer" onClick={handleProfileClick}>
        <div className="font-medium dark:text-white flex flex-col items-end">
          <div>{user.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
        </div>
        <img className="w-10 h-10 rounded-full" src="/avatar.png" alt="avatar" />
      </div>
    </div>
  );
}