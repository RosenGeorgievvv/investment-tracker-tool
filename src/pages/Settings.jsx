import { useState, useEffect } from "react";
import axios from "axios";

const userId = "424e8f2e-0148-431c-82fe-d5742b3ad6cd";

const Settings = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
    avatarURL: "",
  });

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Settings</h2>
        <form  className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={user.firstName}
              
              className="mt-1 block w-full p-2 border border-black-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={user.lastName}
              
              className="mt-1 block w-full p-2 border border-black-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black-700">Age</label>
            <input
              type="number"
              name="age"
              value={user.age}
              className="mt-1 block w-full p-2 border border-black-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black-700">Avatar</label>
            <input
              type="file"
              className="mt-1 block w-full p-2 border border-black-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {user.avatarURL && <img src={user.avatarURL} alt="Avatar" className="mt-2 w-32 h-32 rounded-full mx-auto" />}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
