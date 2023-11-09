import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-baseline">
      <div className="">
        <img
          src="./src/assets/Logo.svg"
          className="logo basis-1 inline-block m-4"
        />
        <input
          type="text"
          placeholder="Search NFT, Artist, Exhibition"
          className="search-bar bg-searchbar rounded-3xl py-2.5 px-7 m-10 w-96 h-10"
        />
      </div>

      <button className="flex justify-center items-center bg-black rounded-3xl text-white w-45 h-12 mr-12 p-4 align-middle">
        Connect Wallet
      </button>
    </header>
  );
};

export default Header;
