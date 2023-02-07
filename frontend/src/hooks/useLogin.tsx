import React from "react";
import { useEffect } from "react";
import ky from "ky";

interface useLoginProps {
  user: string;
  pin: string;
}

const useLogin = (user: string, pin: string): useLoginProps => {

      const [username, setUser] = React.useState("");
      const [pinNum, setPin] = React.useState("");

      useEffect(() => {
            const login = async () => {
                  const response = await ky.post("http://localhost:3000/api/login", {
                        json: {
                              username: user,
                              pin: pin
                        },
                  }).json();
                  console.log(response);
            };
            login();
      }, [username, pinNum]);



  return { user, pin };
};

export default useLogin;
