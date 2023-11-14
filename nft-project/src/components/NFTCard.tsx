import React from 'react'

const NFTCard: React.FC = () => {
  return (
    <div className="w-64 h-96">
        <div className="rounded-t-xl bg-nftName h-1/7 p-4 shadow-md">NFT Name</div>
        <img src="./src/assets/nftPic1.svg" alt="NFT Card" className="w-full my-1" />
        <div className="rounded-b-xl bg-nftName p-4 shadow-md">Artist Name
            <br />
            Current Bid 0.4 ETH
        </div>
    </div>
  )
}

export default NFTCard