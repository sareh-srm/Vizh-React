import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-baseline  flex-col lg:flex-row justify-between items-center px-4 py-2">
      <div className="felx  items-center space-x-4 md:space-x-8 lg:space-x-12 mb-4 lg:mb-0">
        <img
          src="./src/assets/Logo.svg"
          className="inline-block m-4"
          alt="Mintii-Logo"
        />
        <div className="relative inline-block">
          <input
            type="text"
            placeholder="Search NFT, Artist, Exhibition"
            className="bg-gray rounded-3xl py-3.5 px-12 m-10 w-96 h-10"
          />
          <img
            src="./src/assets/search-icon.svg"
            alt="search icon"
            className="absolute left-14 top-1/2 transform -translate-y-1/2"
          />
        </div>
      </div>

      <button className="flex justify-center items-center bg-black rounded-3xl text-white w-45 h-12 mr-12 p-4 align-middle">
        Connect Wallet
      </button>
    </header>
  );
};

export default Header;
