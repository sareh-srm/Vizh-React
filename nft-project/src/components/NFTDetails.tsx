import React from "react";

const NFTDetails: React.FC = () => {
  return (
    <div>
      <main className="flex justify-between p-6 h-full">
        <div className="w-3/6 h-full bg-gray rounded-2xl m-4 pt-10 pl-12 text-black">
          <h2 className="text-3xl font-normal mb-10">From "Collection Name"</h2>
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
            <button className="bg-black text-aboutUs text-3xl font-normal rounded-full w-96 h-16 my-10">
              Submit Purchase
            </button>
          </div>
        </div>
        <img
          src="./src/assets/nftPic4.svg"
          alt=""
          className="w-3/6 h-full object-contain rounded-2xl m-4"
        />
      </main>
    </div>
  );
};

export default NFTDetails;
