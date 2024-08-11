import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import NFTList from "./components/NFTList";
import NFTDetails from "./components/NFTDetails";
import Login from "./components/Login";
import Home from "./routes/Home";

/** 
  * This is the initial beta version of the app. it's like an MVP.
  * There's no landing page here to have marketing strategy.
 **/
const router = createBrowserRouter([
  {
    path: "/login",
    
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
    children:[
      {
        path: "/",
        element: <NFTList />,
      },
      {
        path: "details/:id",
        element: <NFTDetails />,
      }
    ]
  }
]);


const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
