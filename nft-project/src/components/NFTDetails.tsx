import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import SuccessMessage from "./SuccessMessage";

interface NFTInfo {
  id: string;
  nftName: string;
  imageURL: string;
  logoURL: string;
  artistName: string;
  currentBid: string;
  price: string;
}
const info: NFTInfo[] = [
  {
    id: "1",
    nftName: "NFT Name",
    imageURL: "../public/assets/nftPic1.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
  {
    id: "2",
    nftName: "NFT Name",
    imageURL: "../public/assets/nftPic2.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
  {
    id: "3",
    nftName: "NFT Name",
    imageURL: "../public/assets/nftPic3.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
  {
    id: "4",
    nftName: "NFT Name",
    imageURL: "../public/assets/nftPic4.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
  {
    id: "5",
    nftName: "NFT Name",
    imageURL: "../public/assets/nftPic5.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
  {
    id: "6",
    nftName: "NFT Name",
    imageURL: "../public/assets/nftPic6.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
  {
    id: "7",
    nftName: "NFT Name",
    imageURL: "../public/assets/nftPic7.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
  {
    id: "8",
    nftName: "NFT Name",
    imageURL: "../public/assets/nftPic8.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
  {
    id: "9",
    nftName: "NFT Name",
    imageURL: "../public/assets/nftPic9.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
  {
    id: "10",
    nftName: "NFT Name",
    imageURL: "../public/assets/nftPic10.svg",
    logoURL: "./assets/profile-icon.svg",
    artistName: "Artist Name",
    currentBid: "Current Bid",
    price: "0.4 ETH",
  },
];
const NFTDetails: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const nft = id ? info[parseInt(id, 10)] : undefined;

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        navigate("/");
      }, 2000);
    }, 2000);
  };
  // const eventHandler = () => {
  //   alert("hello");
  // };
  if (!nft) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <main className="flex justify-between p-6 h-full">
        <div className="w-3/6 h-full bg-gray rounded-2xl m-4 pt-10 pl-12 text-black">
          <div className="flex">
            <h2 className="text-3xl font-normal mb-10">
              From "Collection Name"
            </h2>
            <img src="../public/assets/CheckSign.svg" />
          </div>
          <h1 className="text-5xl font-normal mb-6">Artwork Name</h1>
          <div className="flex w-48 justify-between mb-6">
            <h4 className="text-2xl font-normal">Royalties</h4>
            <span className="text-xl font-normal text-center bg-green rounded-lg w-16 h-8">
              2.5%
            </span>
          </div>
          <p className="text-xl font-normal text-detailsText mb-10">
            You are about to buy this artwork from
            <br /> "COLLECTION NAME" collection.
          </p>
          <div className="flex justify-between w-64 items-baseline mb-6">
            <label className="text-base font-normal">Floor Price</label>
            <div className="flex justify-evenly items-center w-40 h-11 rounded-2xl bg-white text-sm font-normal">
              <span>0.25</span>
              <span className="rounded-2xl bg-green w-14 h-6 text-center">
                ETH
              </span>
            </div>
          </div>
          <div className="flex justify-between w-64 items-baseline mb-6">
            <label className="text-base font-normal">Mintii fee</label>
            <span className="flex justify-start items-center w-40 h-11 rounded-2xl bg-white text-sm font-normal pl-6">
              2.5%
            </span>
          </div>
          <div className="flex justify-between w-64 items-baseline mb-6">
            <label className="text-base font-normal">You will pay</label>
            <div className="flex justify-evenly items-center w-40 h-11 rounded-2xl bg-white text-sm font-normal">
              <span>0.27</span>
              <span className="rounded-2xl bg-green w-14 h-6 text-center">
                ETH
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-black text-aboutUs text-3xl font-normal rounded-full w-96 h-16 my-10"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit Purchase
            </button>
          </div>
          {isLoading && <Loading />}
          {isSuccess && <SuccessMessage />}
        </div>
        <img
          src={nft.imageURL}
          alt={nft.nftName}
          className="w-3/6 h-full object-contain rounded-2xl m-4"
        />
      </main>
    </div>
  );
};

export default NFTDetails;
