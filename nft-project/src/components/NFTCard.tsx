import React from "react";

type CardProps = {
  imageUrl: string;
};

const NFTCard: React.FC<CardProps> = (props) => {
  return (
    <div className="w-64 h-96 mb-8">
      <div className="rounded-t-xl bg-nftName h-1/7 p-4 shadow-md">
        NFT Name
      </div>
      <div className="flex items-center justify-center w-full my-2">
        <img
          src={props.imageUrl}
          alt="NFT Card"
          className="w-full object-cover"
        />
      </div>
      <div className="rounded-b-xl bg-nftName p-4 shadow-md">
        <div className="flex">
          <img
            src="./src/assets/profile-icon.svg"
            alt="Artist profile"
            className="pr-2"
          />
          <div>Artist Name</div>
        </div>
        <div>Current Bid 0.4 ETH</div>
      </div>
    </div>
  );
};

export default NFTCard;
