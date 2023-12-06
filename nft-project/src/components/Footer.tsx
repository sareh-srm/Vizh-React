import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer mt-10 w-full h-2/6">
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
          <button className="bg-green mt-5 w-44 h-14 rounded-full font-medium text-xl bg-submitButton">
            Submit
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4 pb-20 md:flex-row">
        <div>
          <ul className="">
            <li className="font-normal text-3xl align-right text-white pr-36 pb-5">
              Mintii Account
            </li>
            <li className="text-tds font-normal text-3xl pb-6">
              <a href="" className="py-2">
                Profile
              </a>
            </li>
            <li className="text-tds font-normal text-3xl pb-6">
              <a href="" className="py-2">
                Setting
              </a>
            </li>
            <li className="text-tds font-normal text-3xl pb-6">
              <a href="" className="py-2">
                Privact policy
              </a>
            </li>
            <li className="text-tds font-normal text-3xl pb-6">
              <a href="" className="py-2">
                Terms and condition
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-normal text-3xl align-right text-collections pr-36 pb-5">
              Collections
            </li>
            <li className="text-tds font-normal text-3xl pb-6">
              <a href="" className="py-2">
                Mint NFT
              </a>
            </li>
            <li className="text-tds font-normal text-3xl pb-6">
              <a href="" className="py-2">
                Buy NFT
              </a>
            </li>
            <li className="text-tds font-normal text-3xl pb-6">
              <a href="" className="py-2">
                Sell NFT
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-normal text-3xl align-right text-aboutUs pr-36 pb-5">
              About Us
            </li>
            <li className="text-tds font-normal text-3xl pb-6">
              <a href="" className="py-2">
                Mintii
              </a>
            </li>
            <li className="text-tds font-normal text-3xl pb-6">
              <a href="" className="py-2">
                Artists
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
