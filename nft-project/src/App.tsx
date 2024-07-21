import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NFTList from "./components/NFTList";
import Footer from "./components/Footer";
//import NFTDetails from "./components/NFTDetails";
import Login from "./components/Login";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* this should be the landing page */}
        <Route path="/" element={<NFTList />} />
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        {/* create a login page */}
        {/* create nft list page */}

        <Route path="/SubmitBid/:id" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
