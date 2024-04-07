import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { getProduct } from "../helpers/api";
import Profilecases from "../components/Profilecases";
import { Helmet } from "react-helmet";

const Product = () => {
  const [product, setProduct] = useState({});
  const [addedToCart, setAddedToCart] = useState(false);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProduct(id)
      .then((data) => {
        setProduct(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);


  const renderPrice = () => {
    if (product.discountedPrice && product.discountedPrice !== product.price) {
      const rebate = Math.round(
        ((product.price - product.discountedPrice) / product.price) * 100
      );
      return (
        <>
        <Helmet>
            <title>{product.title} | eComdev</title>
            <meta
              name="description"
              content={product.description}
            />
        </Helmet>
          <div className="flex flex-col gap-2">
            <span style={{ textDecoration: "line-through" }}>
              ${product.price}
            </span>
            <span className="font-bold text-2xl">${product.discountedPrice}</span>
          </div>
          <div className="text-white bg-slate-950 px-4 py-2 w-fit">{rebate}% discount</div>
        </>
      );
    } else {
      return <span className="font-bold text-2xl">${product.price}</span>;
    }
  };

  return (
    <main className="min-h-screen p-8">
      <Profilecases imageRight={false}>
        <img
          src={product.image?.url}
          alt={product.image?.alt}
          className="md:w-1/2 aspect-square object-cover object-center rounded-lg"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-black">{product.title}</h2>
          <p className="text-lg">{product.description}</p>
          {renderPrice()}
          <button
            onClick={() => { addToCart(product); setAddedToCart(true);}}
            className="bg-slate-950 text-white p-4 rounded-md border-2 border-slate-950 font-semibold hover:bg-white hover:text-slate-950 transition-all duration-300 ease-in-out"
          >
            Add to cart
          </button>
          {addedToCart && (
            <div className="bg-green-500 text-white p-4">
              <p>Item as been added to the <Link className="underline" to="/cart">cart</Link></p>
              </div>
          )}
        </div>
      </Profilecases>
    </main>
  );
};

export default Product;
