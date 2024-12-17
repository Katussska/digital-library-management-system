export default function ProfileDetails() {
  return (
    <div className="flex h-full w-1/2 p-10 flex-col justify-center">
      <div className="h-1/4 flex justify-center">
        <img className="h-full" src="avatar.png" alt="profile pic" />
      </div>
      <div className="flex flex-col justify-evenly h-2/5 items-center">
        <h1 className="text-3xl font-bold mb-2">Jake Paul</h1>
        <p className="text-lg mb-1"><strong>Email: </strong>example@gmail.com</p>
        <p className="text-lg mb-1"><strong>Phone: </strong>1234567890</p>
        <p className="text-lg"><strong>Registered: </strong>10.12.2024</p>
      </div>
    </div>
  );
}