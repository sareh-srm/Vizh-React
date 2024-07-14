import React from "react";
import NFTCard from "./NFTCard";
import { Link } from "react-router-dom";

const info = [
  {
    nftName: "NFT Name",
    imageURL: "./assets/nftPic1.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
  {
    nftName: "NFT Name",
    imageURL: "./assets/nftPic2.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
  {
    nftName: "NFT Name",
    imageURL: "./assets/nftPic3.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
  {
    nftName: "NFT Name",
    imageURL: "./assets/nftPic4.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
  {
    nftName: "NFT Name",
    imageURL: "./assets/nftPic5.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
  {
    nftName: "NFT Name",
    imageURL: "./assets/nftPic6.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
  {
    nftName: "NFT Name",
    imageURL: "./assets/nftPic7.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
  {
    nftName: "NFT Name",
    imageURL: "./assets/nftPic8.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
  {
    nftName: "NFT Name",
    imageURL: "./assets/nftPic9.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
  {
    nftName: "NFT Name",
    imageURL: "./assets/nftPic10.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
];

const NFTList: React.FC = () => {
  return (
    <main className="flex flex-wrap justify-start my-auto gap-10 px-4">
      {info.map((information, index) => (
        <Link key={index} to={`/SubmitBid/${index}`}>
          <NFTCard
            nftName={information.nftName}
            imageURL={information.imageURL}
            logoURL={information.logoURL}
            artistName={information.artistName}
            currentBid={information.currentBid}
            price={information.price}
            key={information.nftName}
          />
        </Link>
      ))}
    </main>
  );
};

export default NFTList;
