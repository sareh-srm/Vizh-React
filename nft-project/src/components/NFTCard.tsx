import React from "react";

type CardProps = {
  nftName: string;
  imageURL: string;
  logoURL: string;
  artistName: string;
  currentBid: string;
  price: string;
};

const NFTCard: React.FC<CardProps> = ({
  nftName,
  imageURL,
  logoURL,
  artistName,
  currentBid,
  price,
}) => {
  return (
    <div className="w-64 h-96 mb-4">
      <div className="rounded-t-xl bg-nftName h-1/7 p-4 shadow-md">
        {nftName}
      </div>
      <div className="flex items-center justify-center w-full my-2">
        <img src={imageURL} alt="NFT Card" className="w-full object-cover" />
      </div>
      <div className="rounded-b-xl bg-nftName p-4 shadow-md">
        <div className="flex">
          <img src={logoURL} alt="Artist profile" className="pr-2" />
          <div>{artistName}</div>
        </div>
        <div>
          {currentBid} <span className="text-xl font-bold">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
