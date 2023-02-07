import ky from "ky";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserFetch from "../components/UserFetch";

export interface User {
  message: string;
  image: string;
  username: string;
  name: string;
}

const UserHome = () => {
  const [user, setUser] = useState<User | null>(null);
  const [shouldFetch, setShouldFetch] = useState(false);
  const navigate = useNavigate();

  async function fetchUser() {
    try {
      const userData: User = await ky
        .get("http://localhost:8080/api/user")
        .json();
      setUser(userData);
    } catch (error) {
      console.log(error);
    }
  }

  const resetFetch = () => {
    navigate(0);
    setUser(null);
    setShouldFetch(false);
  };

  useEffect(() => {
    let ignore = false;
    if (shouldFetch && !ignore) {
      fetchUser();
    }
    return () => {
      ignore = true;
    };
  }, [shouldFetch]);

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
      <h1 className="text-4xl text-white font-bold">User Home</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-4 px-4 rounded"
        onClick={() => setShouldFetch(true)}
      >
        Fetch User
      </button>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-4 px-4 rounded"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>

      {user && (
        <>
          <UserFetch user={user} />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-4 px-4 rounded"
            onClick={() => resetFetch()}
          >
            Go Back
          </button>
        </>
      )}
    </div>
  );
};

export default UserHome;
