import { useNavigate } from 'react-router-dom';

export default function Signing() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div>
      <div className="flex items-center gap-4">
        <button className="text-sm dark:text-gray-400" onClick={handleLoginClick}>Login</button>
        <button className="text-sm dark:text-gray-400" onClick={handleRegisterClick}>Register</button>
      </div>
    </div>
  );
}