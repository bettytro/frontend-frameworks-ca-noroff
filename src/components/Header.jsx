import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import logowebp from "../logo.webp";
import { CartContext } from '../context/cartContext';

const Header = () => {
    const { cart } = useContext(CartContext);
    return (
        <header className="bg-slate-950">
            <div className="mx-auto max-w-[1600px] px-8 pb-12 pt-12 flex text-white justify-between items-center">
                <Link to="/">
                    <img src={logowebp} alt="Logo - to the homepage" className="h-4 sm:h-12 w-auto" />
                </Link>
                <nav>
                    <ul className="flex gap-2 md:gap-8 text-md md:text-xl font-semibold">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li className="relative cursor-pointer">
                            <Link to="/cart">
                                <FontAwesomeIcon size="xl" icon={faCartShopping} />
                                {cart.length > 0 && (
                                    <div className="absolute -top-[15px] -right-[15px] bg-red-500 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">
                                        {cart.length}
                                    </div>
                                )}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;