export default function Login() {
  return (
    <div className="bg-white w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold dark:text-white mb-10">
        Welcome back!
      </h1>
      <div className="border-2 border-blue-600 flex flex-col p-10">
        <div>
          <form className="flex flex-col justify-center">
            <div className="m-3">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                email</label>
              <input type="email" id="email" aria-describedby="email-helper-text"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="name@flowbite.com" />
            </div>
            <div className="m-3">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                password</label>
              <input type="password" id="password" aria-describedby="password-helper-text"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="********" />
            </div>
            <button type="button"
                    className=" m-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}