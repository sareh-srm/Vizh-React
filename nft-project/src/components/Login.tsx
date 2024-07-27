import { useState } from "react";
import PocketBase from "pocketbase";
import { useLocation, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const queryParams = new URLSearchParams(location.search);
  const nftId = queryParams.get("nft");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const pb = new PocketBase("http://127.0.0.1:8090");
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
      console.log(authData);

      if (nftId) {
        navigate(`/nftdetails/${nftId}`);
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log("Login failed", err);
      setError("Login failed, please check your credentials and try again");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center space-y-4 p-6 max-w-md mx-auto bg-gray shadow-md rounded-lg"
      >
        {error && <p>{error}</p>}
        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Log in
        </button>
      </form>
    </>
  );
};

export default Login;
