import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="bg-white w-4/12 h-1/2 flex items-center justify-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl">
      Submitting your bid...
    </div>
  );
};

export default Loading;
