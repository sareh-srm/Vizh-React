import React from "react";
import useAppStore from "../store";
import { useNavigate } from "react-router-dom";

const Header: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  const logout = useAppStore((state) => state.logout);
  const onLogoutClick = async () => {
    await logout();
    window.location.replace("/");
  };

  const navigate = useNavigate();

  return (
    <header className="flex justify-between w-full h-24 sm:h-28">
      <div className="flex items-center gap-2 h-full pl-5 md:gap-10">
        <button onClick={() => navigate(`/`)}>
          <img
            src="../public/assets/Logo.svg"
            className="h-16 w-16"
            alt="Mintii-Logo"
          />
        </button>
        <div className="relative">
          <input
            type="text"
            placeholder="Search NFT, Artist, Exhibition"
            className="bg-gray rounded-3xl py-3.5 px-12 h-10 w-36 sm:w-72 lg:w-96"
          />
          <img
            src="../public/assets/search-icon.svg"
            alt="search icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
          />
        </div>
      </div>
      <div className="flex items-center w-28 px-2 sm:w-40">
        {isLoggedIn && (
          <button
            className="flex justify-center items-center bg-black text-white rounded-3xl w-full h-10 py-6"
            onClick={onLogoutClick}
          >
            Log out
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
