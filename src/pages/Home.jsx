import React from "react";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import { Helmet } from "react-helmet";


const Home = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Home | eComdev</title>
        <meta
          name="description"
          content="eComdev is finally here. easily available for you."
        />
      </Helmet>
      <Hero />
      <ProductList />
    </main>
  );
};

export default Home;
