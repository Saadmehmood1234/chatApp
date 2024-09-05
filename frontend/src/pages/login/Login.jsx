import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(/mnt/data/bg.jpeg)` }}
    >
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gray-700 bg-opacity-20 backdrop-filter backdrop-blur-md">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-pink-500  via-blue-400 to-orange-500 bg-clip-text text-transparent">
            ChatterBox
          </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-lg font-medium text-white mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              className="w-full p-3 rounded-md border-none focus:ring-2 focus:ring-gradient-to-r from-pink-500  via-blue-400 to-orange-500"
              style={{ backgroundImage: 'linear-gradient(to right, #232526, #414345)', color: 'white' }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-lg font-medium text-white mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full p-3 rounded-md border-none focus:ring-2 focus:ring-gradient-to-r from-pink-500  via-blue-400 to-orange-500"
              style={{ backgroundImage: 'linear-gradient(to right, #232526, #414345)', color: 'white' }}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:opacity-70 text-white inline-block mb-6"
          >
            {"Don't"} have an account?
          </Link>
          <button
            disabled={loading}
            className="w-full py-3 rounded-md text-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-blue-400 to-orange-500 hover:opacity-70 transition duration-300"
          >
            {loading ? <span className="loading loading-spinner"></span> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
