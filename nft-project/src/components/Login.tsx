import React, { useEffect, useState } from "react";
import useAppStore, { autoLogin } from "../store";
import { Navigate, redirect, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Login: React.FC = () => {
  const login = useAppStore((state) => state.login)
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const me = useAppStore((state) => state.me)
  const [loggedIn, setLoggedIn] = useState(me !== null && me.id.length > 5)

  useEffect(() => {
    if (me === null || me.id.length < 5) {
      autoLogin().then(() => {
        setLoggedIn(true)
      })
    }
  }, [me])

  if (loggedIn) {
    return (
      <Navigate to="/" replace={true} />
    )
  }

  const loginClicked = async () => {
    const data = await login(email, pass)
    console.log(data)
    console.log('redirecting ...')
    if (location.search.startsWith('?url=')) {
      const url = location.search.substring(location.search.indexOf('=') + 1)
      console.log('redirecting to', url)
      return navigate(url)
    }
    return redirect('/')
  }
  return (
    <>
      <Header isLoggedIn={loggedIn}/>
      <div className="flex flex-col justify-center items-center space-y-4 p-6 max-w-md mx-auto bg-gray shadow-md rounded-lg">
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
            className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={ (event) => { setEmail(event.target.value)}}
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
            className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={ (event) => { setPass(event.target.value)}}
          />
        </div>
        <button
          className="w-full bg-green font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={loginClicked}
        >
          Log in
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Login;
