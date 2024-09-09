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
    <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gray-600 shadow-gray-200/50">
      <h1 className="text-4xl font-bold text-center text-white mb-6">
        Welcome to{" "}
        <span className="text-orange-500 ">
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
              className="w-full p-3 rounded-md border-none focus:ring-2 focus:ring-gradient-to-r from-pink-500  via-blue-400 to-orange-500"
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
              className="w-full p-3 rounded-md border-none focus:ring-2 focus:ring-gradient-to-r from-pink-500  via-blue-400 to-orange-500"
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
              className="w-full p-3 rounded-md border-none focus:ring-2 focus:ring-gradient-to-r from-pink-500  via-blue-400 to-orange-500"
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
              className="w-full p-3 rounded-md border-none focus:ring-2 focus:ring-gradient-to-r from-pink-500  via-blue-400 to-orange-500"
              style={{ backgroundImage: 'linear-gradient(to right, #232526, #414345)', color: 'white' }}
            />
          </div>

          <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <Link
            to="/login"
            className="text-sm hover:opacity-70  font-medium text-white inline-block mb-6"
          >
            Already have an account?
          </Link>
          <div>
            <button
              className="w-full py-3 rounded-md text-lg font-semibold text-white bg-orange-500 hover:opacity-70 transition duration-300"
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




// import React, { useState } from "react";
// import GenderCheckBox from "./GenderCheckBox";
// import { Link } from "react-router-dom";
// import useSignup from "../../hooks/userSignUp";

// const SignUp = () => {
//   const [inputs, setInputs] = useState({
//     fullname: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//     gender: ''
//   });
// const {loading , signup }=useSignup();
//   const handleCheckboxChange = (gender) => {
//     setInputs({ ...inputs, gender });
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await signup(inputs);
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div
//         className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding 
//       backdrop-filter backdrop-blur-lg bg-opacity-0"
//       >
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           SignUp
//           <span className="text-orange-500">ChatterBox</span>
//         </h1>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label className="label p-2">
//               <span className="text-orange-500 label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               value={inputs.fullname}
//               onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
//               placeholder="Saad Mehmood"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-orange-500 label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               value={inputs.username}
//               onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
//               placeholder="saad123"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-orange-500 label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               value={inputs.password}
//               onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-orange-500 label-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               value={inputs.confirmPassword}
//               onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
//               placeholder="Confirm Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

//           <Link
//             to="/login"
//             className="text-sm hover:underline text-orange-500 hover:text-orange-600 inline-block"
//           >
//             Already have an account?
//           </Link>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">SignUp</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
