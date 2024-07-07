import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between w-full h-24 sm:h-28">
      <div className="flex items-center gap-2 h-full pl-5 md:gap-10">
        <img
          src="../public/assets/Logo.svg"
          className="h-16 w-16"
          alt="Mintii-Logo"
        />
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
        <button className="flex justify-center items-center bg-black text-white rounded-3xl w-full h-10 py-6">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
