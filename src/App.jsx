import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const App = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUser(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }
    loadData();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="bg-[#1c1c1c] p-10 min-h-screen">
        <h1 className="text-white text-center text-3xl mb-5">User Data</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {user.map((ele) => (
            <div
              key={ele.id}
              className="contain bg-gray-800 text-white flex flex-col items-center p-5 rounded-lg shadow-lg"
            >
              <div
                className="pic w-[150px] h-[150px] mb-4 rounded-[50%] bg-cover bg-center"
                style={{ backgroundImage: `url(${ele.avatar_url})` }}
              ></div>
              <div className="log text-xl font-semibold">{ele.login}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default App;
