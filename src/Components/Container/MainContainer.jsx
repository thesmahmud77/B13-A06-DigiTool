import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const MainContainer = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainContainer;
