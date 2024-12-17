import { useEffect, useState } from 'react';

export default function ProfileDetails() {
  const [user, setUser] = useState({ name: '', email: '', phone: '', registrationDate: '' });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    setUser({
      name: userData.name || 'N/A',
      email: userData.email || 'N/A',
      phone: userData.phone || 'N/A',
      registrationDate: userData.registrationDate || 'N/A',
    });
  }, []);

  return (
    <div className="flex h-full w-1/2 p-10 flex-col justify-center">
      <div className="h-1/4 flex justify-center">
        <img className="h-full" src="avatar.png" alt="profile pic" />
      </div>
      <div className="flex flex-col justify-evenly h-2/5 items-center">
        <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
        <p className="text-lg mb-1"><strong>Email: </strong>{user.email}</p>
        <p className="text-lg mb-1"><strong>Phone: </strong>{user.phone}</p>
        <p className="text-lg"><strong>Registered: </strong>{user.registrationDate}</p>
      </div>
    </div>
  );
}