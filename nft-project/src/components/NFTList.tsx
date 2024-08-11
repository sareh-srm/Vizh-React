import React, { useEffect, useState } from "react";
import NFTCard from "./NFTCard";
import { Link } from "react-router-dom";
import useAppStore, { NFT } from "../store";
import Client from "pocketbase";

async function getNftsList(pb: Client): Promise<NFT[]> {
  const nfts = await pb.collection("nfts").getFullList<NFT>({
    sort: "-created",
  });
  return nfts;
}

const NFTList: React.FC = () => {
  const [nftList, setNftList] = useState<NFT[]>([]);
  const [error, setError] = useState("");
  const pb = useAppStore((state) => state.pb);

  useEffect(() => {
    getNftsList(pb)
      .then((nfts) => {
        setNftList(nfts);
      })
      .catch((err) => {
        setError((err as Error).message);
      });
  }, [pb]);

  return (
    <main className="flex flex-wrap justify-start my-auto gap-10 px-4">
      {error.length > 1 && <div> {error} </div>}
      {nftList.map((nft) => (
        <Link key={nft.id} to={`details/${nft.id}`}>
          <NFTCard
            nftName={nft.name}
            imageURL={nft.image_url}
            logoURL="./assets/profile-icon.svg"
            artistName={nft.artist_name}
            currentBid={`Current Bid`}
            price={`${nft.current_bid} ETH`}
            key={nft.id}
          />
        </Link>
      ))}
    </main>
  );
};

export default NFTList;
