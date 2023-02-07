import ky from "ky";
import { useEffect, useState } from "react";
import { User } from "../pages/UserHome";

interface UserFetchProps {
  user: User;
}

const UserFetch = ({ user }: UserFetchProps) => {
  return (
    <div className="mx-auto">
      {user && (
        <div className="flex flex-col items-center justify-center">
          <img className="w-32 h-32 rounded-full" src={user.image} alt="" />
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <h2 className="text-xl font-bold">{user.username}</h2>
          <p className="text-lg">{user.message}</p>
        </div>
      )}
    </div>
  );
};

export default UserFetch;
