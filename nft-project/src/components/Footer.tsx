import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer mt-10">
      <div className="flex justify-evenly py-28">
        <div>
          <img src="./src/assets/minti-footer.svg" alt="minti-footer" />
        </div>

        <div>
          <h6 className="text-white font-normal text-3xl">
            Become an Early Adopter
          </h6>
          <br />
          <input
            type="text"
            placeholder="Enter your Email-Address"
            className="bg-footer border-b-2 font-medium text-base border-b-neutral-100"
          />
        </div>

        <div>
          <button className="bg-submitButton mt-5 w-44 h-14 rounded-full font-medium text-xl bg-submitButton">
            Submit
          </button>
        </div>
      </div>

      <div className="flex justify-center pb-5">
        <table>
          <thead>
            <tr className="font-normal text-3xl align-right">
              <th className="text-white pr-36">Mintii Account</th>
              <th className="text-collections pr-36">Collections</th>
              <th className="text-aboutUs pr-36">About Us</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-tds font-normal text-3xl">
              <td className="py-2">Profile</td>
              <td className="py-2">Mint NFT</td>
              <td className="py-2">Mintii</td>
            </tr>
            <tr className="text-tds font-normal text-3xl">
              <td className="py-2">Setting</td>
              <td className="py-2">Buy NFT</td>
              <td className="py-2">Artists</td>
            </tr>
            <tr className="text-tds font-normal text-3xl">
              <td className="py-2">Privacy policy</td>
              <td className="py-2">Sell NFT</td>
            </tr>
            <tr className="text-tds font-normal text-3xl">
              <td className="py-2">Terms and condition</td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
  );
};

export default Footer;
