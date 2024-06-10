import React, { useState, useEffect } from "react";
import Header from "./Header";
import Center from "./Center";
import Footer from "./Footer";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); // Set loading to false even if there is an error
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Center products={products} />
      <Footer />
    </>
  );
}

export default Home;
