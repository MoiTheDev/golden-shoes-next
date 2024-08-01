import React from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Golden Shoes</h1>
        <p>Find the finest luxury sneakers here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
