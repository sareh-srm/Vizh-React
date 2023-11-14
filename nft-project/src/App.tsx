import React from "react";
import Header from "./components/Header.tsx";
import NFTCard from "./components/NFTCard.tsx";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <NFTCard />
    </div>
  );
};

export default App;
