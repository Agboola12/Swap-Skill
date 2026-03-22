import { useState, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    return (
        <nav className="shadow-md w-full z-50 text-black bg-white fixed">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="/" className="flex gap-3 items-center">
                    <img src={logo} alt="Logo" className="w-24 logo rounded-lg" />
                    <p className="font-bold text-xl">Adeleke Skill Swap</p>
                </a>

                <div className="hidden md:flex space-x-6 text-center items-center justify-center relative">

                    <Link to="/" className="block px-4 py-2 font-semibold ">
                        Home
                    </Link>
                    <Link to="/" className="block px-4 py-2 font-semibold ">
                        How It Work
                    </Link>

                    <Link
                        to="/login"
                        className="bg-[#6036E1] font-semibold border-2 border-[#6036E1] text-white rounded-[12px] hover:shadow-2xl hover:shadow-[#6036E1] px-3 py-2 hover:text-[#6036E1] hover:bg-white"
                    >
                        Login
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden text-black" onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden shadow-md bg-white">

                    <Link
                        to="/"
                        className="block  font-medium text-left px-10 py-3 text-black hover:bg-gray-200"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>

                    <Link
                        to="/"
                        className="block  font-medium text-left px-10 py-3 text-black hover:bg-gray-200"
                        onClick={() => setIsOpen(false)}
                    >
                        How It Work
                    </Link>

                    <Link
                        to="/login"
                        className="block ml-5 mt-3 w-[20%] text-center font-semibold border-2 border-[#6036E1] text-white rounded-[12px] px-3 py-3 hover:text-[#6036E1] hover:bg-white mb-5 bg-[#6036E1]"
                        onClick={() => setIsOpen(false)}
                    >
                        Login
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
