import React from "react";

const SuccessMessage: React.FC = () => {
  return (
    <div className="bg-white w-4/12 h-1/2 flex flex-col items-center justify-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl">
      <img
        src="../public/assets/CheckSign.svg"
        alt="check sign"
        className="mb-4"
      />
      <div className="text-center">Bid submitted successfully...</div>
    </div>
  );
};

export default SuccessMessage;
