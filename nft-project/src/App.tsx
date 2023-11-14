import React from "react";
import Header from "./components/Header.tsx";
import NFTList from "./components/NFTList.tsx";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <NFTList />
    </div>
  );
};

export default App;
