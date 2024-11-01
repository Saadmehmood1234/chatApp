import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/userSignUp";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });
  
  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div
    className="flex items-center justify-center min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(/mnt/data/bg.jpeg)` }}
  >
    <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-gray-600 shadow-[#ed3b56]/50">
      <h1 className="text-4xl font-bold text-center text-white mb-6">
        Welcome to{" "}
        <span className="text-[#ed3b56] ">
          ChatterBox
        </span>
      </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-medium text-white mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={inputs.fullname}
              onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
              placeholder="Saad Mehmood"
              className="w-full p-3 rounded-md border-none focus:ring-2 focus:ring-[#ed3b56] outline-none"
              style={{ backgroundImage: 'linear-gradient(to right, #232526, #414345)', color: 'white' }}
            />
          </div>
          <div className="mt-4">
            <label className="block text-lg font-medium text-white mb-2">
              Username
            </label>
            <input
              type="text"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              placeholder="saad123"
              className="w-full p-3 rounded-md border-none focus:ring-2 focus:ring-[#ed3b56] outline-none"
              style={{ backgroundImage: 'linear-gradient(to right, #232526, #414345)', color: 'white' }}
            />
          </div>
          <div className="mt-4">
            <label className="block text-lg font-medium text-white mb-2">
              Password
            </label>
            <input
              type="password"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              placeholder="Enter Password"
              className="w-full p-3 rounded-md border-none focus:ring-2 focus:ring-[#ed3b56] outline-none"
              style={{ backgroundImage: 'linear-gradient(to right, #232526, #414345)', color: 'white' }}
            />
          </div>
          <div className="mt-4">
            <label className="block text-lg font-medium text-white mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              placeholder="Confirm Password"
              className="w-full p-3 rounded-md border-none focus:ring-2 focus:ring-[#ed3b56] outline-none"
              style={{ backgroundImage: 'linear-gradient(to right, #232526, #414345)', color: 'white' }}
            />
          </div>

          <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <Link
            to="/login"
            className="text-sm hover:text-[#ed3b56] duration-300 transition-all  font-medium text-white inline-block mb-6"
          >
            Already have an account?
          </Link>
          <div>
            <button
              className="w-full py-3 rounded-md text-lg font-semibold text-white bg-[#ed3b56] hover:opacity-70 transition duration-300"
              disabled={loading}
            >
               {loading? <span className="loading loading-spinner"></span>:"SignUp"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;



