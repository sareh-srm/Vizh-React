import React from "react";
import NFTCard from "./NFTCard";
import { Link } from "react-router-dom";

const NFTList: React.FC = () => {
  return (
    <main className="flex flex-wrap justify-start my-auto gap-10 px-4">
      <Link to="/details">
        <NFTCard imageUrl="./src/assets/nftPic1.svg" />
      </Link>
      <Link to="/details">
        <NFTCard imageUrl="./src/assets/nftPic2.svg" />
      </Link>
      <Link to="/details">
        <NFTCard imageUrl="./src/assets/nftPic3.svg" />
      </Link>
      <Link to="/details">
        <NFTCard imageUrl="./src/assets/nftPic4.svg" />
      </Link>
      <Link to="/details">
        <NFTCard imageUrl="./src/assets/nftPic5.svg" />
      </Link>
      <Link to="/details">
        <NFTCard imageUrl="./src/assets/nftPic6.svg" />
      </Link>
      <Link to="/details">
        <NFTCard imageUrl="./src/assets/nftPic7.svg" />
      </Link>
      <Link to="/details">
        <NFTCard imageUrl="./src/assets/nftPic8.svg" />
      </Link>
      <Link to="/details">
        <NFTCard imageUrl="./src/assets/nftPic9.svg" />
      </Link>
      <Link to="/details">
        <NFTCard imageUrl="./src/assets/nftPic10.svg" />
      </Link>
    </main>
  );
};

export default NFTList;
