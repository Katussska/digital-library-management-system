import { useNavigate } from 'react-router-dom';

export default function ProfileBadge() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <div>
      <div className="flex items-center gap-4 cursor-pointer" onClick={handleProfileClick}>
        <div className="font-medium dark:text-white flex flex-col items-end">
          <div>First Lastname</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">example@gmail.com</div>
        </div>
        <img className="w-10 h-10 rounded-full" src="avatar.png" alt="avatar" />
      </div>
    </div>
  );
}