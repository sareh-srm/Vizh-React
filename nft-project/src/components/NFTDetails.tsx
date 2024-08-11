import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Client from "pocketbase";
import Loading from "./Loading";
import SuccessMessage from "./SuccessMessage";
import useAppStore, { NFT, UserModel } from "../store";

async function getNft(pb: Client, nftId: string): Promise<NFT> {
  const nft = await pb.collection("nfts").getOne<NFT>(nftId);
  console.log(nft);
  return nft;
}

async function bid(
  pb: Client,
  me: UserModel,
  nft: NFT,
  amount: number
): Promise<NFT> {
  const leastNextBid = nft.current_bid + 0.00001;
  if (amount < leastNextBid) {
    throw new Error(
      `Next least amount of bid for this item is: ${leastNextBid} ETH`
    );
  }
  if (Date.now() > new Date(nft.deadline).getTime()) {
    throw new Error("Bidding for this item has finished");
  }
  const updatedNft = await pb.collection("nfts").update<NFT>(nft.id, {
    current_bid: amount,
    bidder_id: me.id,
    current_bid_at: Date.now(),
  });

  return updatedNft;
}

const NFTDetails: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [nft, setNft] = useState<NFT | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [amount, setAmount] = useState(0);
  const pb = useAppStore((state) => state.pb);
  const me = useAppStore((state) => state.me);

  const collectionName = "Modern Art";

  useEffect(() => {
    if (!id) {
      navigate(`/login?url=/details/${id}`);
      return;
    }
    setIsLoading(true);
    getNft(pb, id)
      .then((_nft) => {
        setNft(_nft);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [pb, id, navigate]);

  
  const handleSubmit = () => {
    if (me === null) {
      navigate(`/login?url=/details/${id}`);
      return;
    }
    if (!nft) {
      return;
    }

    setIsLoading(true);
    bid(pb, me, nft, amount)
      .then(() => {

        getNft(pb, id!).then((_nft) => {
          setNft(_nft);
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 2000);
        }, 2000);
      });
  };

  if (!nft) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <main className="flex justify-between p-6 h-full">
        <div className="w-3/6 h-full bg-gray rounded-2xl m-4 pt-10 pl-12 text-black">
          <div className="flex">
            <h2 className="text-3xl font-normal mb-10">
              From "{collectionName}"
            </h2>
            <img src="../public/assets/CheckSign.svg" />
          </div>
          <h1 className="text-5xl font-normal mb-6">{nft.name}</h1>
          <div className="flex w-48 justify-between mb-6">
            <h4 className="text-2xl font-normal">Royalties</h4>
            <span className="text-xl font-normal text-center bg-green rounded-lg w-16 h-8">
              2.5%
            </span>
          </div>
          <p className="text-xl font-normal text-detailsText mb-10">
            You are about to buy this artwork from
            <br /> "{collectionName}" collection.
          </p>
          <div className="flex justify-between w-64 items-baseline mb-6">
            <label className="text-base font-normal">Current Bid</label>
            <div className="flex justify-evenly items-center w-40 h-11 rounded-2xl bg-white text-sm font-normal">
              <span>{nft.current_bid}</span>
              <span className="rounded-2xl bg-green w-14 h-6 text-center">
                ETH
              </span>
            </div>
          </div>
          <div className="flex justify-between w-64 items-baseline mb-6">
            <label className="text-base font-normal">Mintii fee</label>
            <span className="flex justify-start items-center w-40 h-11 rounded-2xl bg-white text-sm font-normal pl-6">
              0.25%
            </span>
          </div>
          <div className="flex justify-between w-64 items-baseline mb-6">
            <label className="text-base font-normal">Your Offer</label>
            <div className="flex justify-evenly items-center w-40 h-11 rounded-2xl bg-white text-sm font-normal">
              <input
                type="text"
                placeholder="ETH"
                className="px-4 w-40 focus:outline-none focus:border-none"
                value={amount || ""}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="flex justify-between w-64 items-baseline mb-6">
            <label className="text-base font-normal">You will pay</label>
            <div className="flex justify-evenly items-center w-40 h-11 rounded-2xl bg-white text-sm font-normal">
              <span>{amount * (0.25 / 100) + amount}</span>
              <span className="rounded-2xl bg-green w-14 h-6 text-center">
                ETH
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            {nft !== null && (
              <button
                className="bg-black text-aboutUs text-3xl font-normal rounded-full w-96 h-16 my-10"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {me !== null ? "Submit Bid" : "Connect Wallet"}
              </button>
            )}
          </div>
          {isLoading && <Loading />}
          {isSuccess && <SuccessMessage />}
        </div>
        <img
          src={nft.image_url}
          alt={nft.name}
          className="w-3/6 h-full object-contain rounded-2xl m-4"
        />
      </main>
    </div>
  );
};

export default NFTDetails;
