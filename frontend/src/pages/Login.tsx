import * as React from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [pass, setPin] = React.useState("");
      const { user, pin } = useLogin(username, pass);
      
      console.log(user, pin);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="absolute top-16 left-4">
        <button className="bg-purple-300 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded mt-4 w-[7rem] transition-all duration-300 ease-linear">
          Go Back
        </button>
      </div>
      <div className="flex flex-col items-center justify-center pt-48">
        <div className="flex flex-col items-center justify-center h-[calc(50vh-4rem)] gap-6 border-2 border-purple-200 rounded-md p-4 bg-violet-400 w-full">
          <h1 className="text-2xl text-white font-bold">
            Nyumat's OpenAI Playground
          </h1>

          <h2 className="text-4xl text-white font-bold">Log In</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <input
              className="bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              className="bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4"
              type="password"
              placeholder="PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />

           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
