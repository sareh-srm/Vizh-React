import React from "react";
import NFTCard from "./NFTCard";

const NFTList: React.FC = () => {
  return (
    <main className="grid grid-cols-4 gap-8 p-4">
      <NFTCard imageUrl="./src/assets/nftPic1.svg" />
      <NFTCard imageUrl="./src/assets/nftPic2.svg" />
      <NFTCard imageUrl="./src/assets/nftPic3.svg" />
      <NFTCard imageUrl="./src/assets/nftPic4.svg" />
      <NFTCard imageUrl="./src/assets/nftPic5.svg" />
      <NFTCard imageUrl="./src/assets/nftPic6.svg" />
      <NFTCard imageUrl="./src/assets/nftPic7.svg" />
      <NFTCard imageUrl="./src/assets/nftPic8.svg" />
      <NFTCard imageUrl="./src/assets/nftPic9.svg" />
      <NFTCard imageUrl="./src/assets/nftPic10.svg" />
    </main>
  );
};

export default NFTList;
