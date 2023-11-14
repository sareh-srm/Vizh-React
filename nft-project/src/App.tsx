import React from "react";
import Header from "./components/Header.tsx";
import NFTList from "./components/NFTList.tsx";
import Footer from "./components/Footer.tsx";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <NFTList />
      <Footer />
    </div>
  );
};

export default App;
