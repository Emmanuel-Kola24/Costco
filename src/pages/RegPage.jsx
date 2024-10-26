import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RegPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div>
        <h1 className='text-4xl text-center justify-center mr-36 font-semibold mb-3'>Create Account</h1>
      </div>  

      <form className="max-w-sm mx-auto border-2 py-6 px-6">
        <div className="mb-5">
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email Address"
            required
          />
        </div>

        <div className="mb-5 relative">
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            required
          />
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <div className="mb-5 relative">
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Confirm Password"
            required
          />
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <div>
          <h2 className='text-blue-600 mb-3 underline decoration-dotted'>Where can i find my membership number?</h2>
        </div>


        <div className="mb-5 flex flex-row">
          <input
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Membership Number (Optional)"
            required
          />
          <h2 className='bg-blue-700 text-white rounded-full text-sm h-5 w-5 items-center justify-center mt-2 text-center ml-4'>?</h2>
        </div>
        <p className='text-sm'>By creating an account you agree to Costco.com <span className='text-blue-500 underline decoration-dotted'> terms and conditions</span> of use
        </p>
        <Link to="/RegPage">
        <button
          type="submit"
          className="text-white bg-blue-800 hover:bg-blue-800 mt-8 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full border-b-2"
        >
          Create Account
        </button>
        </Link>
        <p className='mb-12 mt-10'>Already have an account?<Link to="/LoginPage"> <span className='text-blue-500 underlne decoration-dotted'>Sign in</span></Link></p>

  
      </form>
    </div>
  );
};

export default RegPage;
