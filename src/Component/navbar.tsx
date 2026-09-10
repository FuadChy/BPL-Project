import { useState } from "react";
import Logo from "../assets/logo.png";
import { AiFillDollarCircle } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ coin }: { coin: number }) => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="py-2">
            <div className="container mx-auto px-4">

                {/* Main Navbar */}
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-28 sm:w-36"
                    />

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex gap-6 items-center cursor-pointer">
                        <li>Home</li>
                        <li>Fixtures</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                    </ul>

                    {/* Coin + Hamburger */}
                    <div className="flex items-center gap-3">

                        {/* Coins */}
                        <div className="font-bold text-lg sm:text-2xl text-black flex gap-1 items-center">
                            <AiFillDollarCircle />
                            <span>{coin.toLocaleString()}</span>
                        </div>

                        {/* Hamburger */}
                        <button
                            className="md:hidden text-3xl"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <HiX /> : <HiMenu />}
                        </button>

                    </div>
                </div>

                {/* Mobile Navigation */}
                {menuOpen && (
                    <ul className="md:hidden flex flex-col items-center gap-4 mt-4 py-4 border-t">
                        <li
                            onClick={() => setMenuOpen(false)}
                            className="cursor-pointer"
                        >
                            Home
                        </li>

                        <li
                            onClick={() => setMenuOpen(false)}
                            className="cursor-pointer"
                        >
                            Fixtures
                        </li>

                        <li
                            onClick={() => setMenuOpen(false)}
                            className="cursor-pointer"
                        >
                            Teams
                        </li>

                        <li
                            onClick={() => setMenuOpen(false)}
                            className="cursor-pointer"
                        >
                            Schedules
                        </li>
                    </ul>
                )}

            </div>
        </nav>
    );
};

export default Navbar;