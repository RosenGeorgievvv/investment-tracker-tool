import { useState } from "react";

const Settings = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
    avatarURL: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.firstName || !user.lastName || !user.age) {
      alert("All fields are required!");
      return;
    }

    console.log(user);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Settings
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input type="text" name="firstName" value={user.firstName} onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={user.age}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Avatar
            </label>
            <input
              type="file"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
            {user.avatarURL && (
              <img
                src={user.avatarURL}
                alt="Avatar"
                className="mt-2 w-32 h-32 rounded-full mx-auto"
              />
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
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
