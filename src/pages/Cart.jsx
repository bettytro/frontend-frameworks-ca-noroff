import React from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Cart = () => {
    const { cart, removeFromCart } = React.useContext(CartContext);

    const totalPrice = cart.reduce((total, item) => total + item.discountedPrice, 0);

    return (
        <main className="min-h-screen">
            <Helmet>
                <title>Shopping Cart | eComdev</title>
                <meta
                    name="description"
                    content="Your shopping cart. Add or remove items from your cart."
                />
            </Helmet>
            <section className="mx-auto max-w-[1600px] p-8">
                <h1 className="md:text-6xl text-2xl font-black my-4 md:my-12">Shopping cart</h1>
                <ul className="md:w-2/3 flex flex-col gap-4">
                    {cart.map((item) => (
                        <li className="flex group md:flex-row flex-col justify-between gap-2 md:items-center" key={item.id}>
                            <Link
                                className="flex gap-4 items-center"
                                to={`/product/${item.id}`}
                            >
                                <img
                                    className="w-28 group-hover:opacity-80 bg-white opacity-100 h-28 object-cover"
                                    src={item.image.url}
                                    alt={item.image.alt}
                                />
                                <div>
                                    <h2>{item.title}</h2>
                                    <p className="font-bold">${item.discountedPrice}</p>
                                </div>
                            </Link>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="bg-slate-950 text-white p-2 w-fit h-fit rounded-md"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
                <h2 className="text-xl font-bold my-12">Total: ${totalPrice.toFixed(2)}</h2>
                <Link className="bg-slate-950 text-white p-4 rounded-md font-semibold border-2 border-slate-950 transition-all duration-300 ease-in-out hover:bg-white hover:text-slate-950" to="/checkout">
                    Checkout
                </Link>

            </section>
        </main>
    );
};

export default Cart;