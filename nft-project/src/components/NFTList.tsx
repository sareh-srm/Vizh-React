import React from 'react'
import NFTCard from './NFTCard';

const NFTList: React.FC = () => {
  return (
    <main className="grid grid-cols-4 gap-8 p-4">
        <NFTCard imageUrl="./src/assets/nftPic1.svg" />
        <NFTCard imageUrl="./src/assets/nftPic2" />
        <NFTCard imageUrl="./src/assets/nftPic3" />
        <NFTCard imageUrl="./src/assets/nftPic4" />
        <NFTCard imageUrl="./src/assets/nftPic5" />
        <NFTCard imageUrl="./src/assets/nftPic6" />
        <NFTCard imageUrl="./src/assets/nftPic7" />
        <NFTCard imageUrl="./src/assets/nftPic8" />
        <NFTCard imageUrl="./src/assets/nftPic9" />
        <NFTCard imageUrl="./src/assets/nftPic10" />
    </main>
  )
}

export default NFTList;