import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import { Helmet } from "react-helmet";

const CheckoutSuccess = () => {
    const { clearCart } = useContext(CartContext);

    useEffect(() => {
        clearCart();
    }, []);

    return (
        <main className='min-h-[70vh] flex items-center bg-slate-950 px-8'>
            <Helmet>
                <title>Checkout Success | eComdev</title>
                <meta
                    name='description'
                    content='Thank you for ordering! Your order is now in processing, and will be sent to you as soon as possible.'
                />
            </Helmet>
            <section className='max-w-[1600px] flex flex-col text-center mx-auto text-white'>
                <h1 className='text-6xl font-black py-8'>Thank you for ordering!</h1>
                <p>Your order is now in processing, and will be sent to you as soon as possible.</p>
                <Link to='/' className='bg-white text-slate-950 p-4 rounded-md font-semibold border-2 border-white transition-all duration-300 ease-in-out hover:bg-slate-950 hover:text-white mt-8'>Shop more</Link>
            </section>
        </main>
    )
}

export default CheckoutSuccess