const Login = () => {
  return (
    <div className="w-1/5 py-6 my-60 mx-auto rounded-md border border-gray-500">
      <h2 className="my-10 text-center text-2xl font-bold  text-gray-100">
        Login to your account
      </h2>
      <form className="space-y-6 px-8">
        <div>
          <label
            htmlFor="username"
            className="block text-base font-medium text-gray-100"
          >
            Username
          </label>
          <div className="mt-2">
            <input
              name="username"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-100 shadow-sm bg-gray-800"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-base font-medium text-gray-100"
          >
            Password
          </label>
          <div className="mt-2">
            <input
              name="password"
              type="password"
              required
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-100 shadow-sm bg-gray-800"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-500 px-3 py-1.5 font-semibold"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
