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
                <a href="/" className="flex items-center">
                    <img src={logo} alt="Logo" className="w-24 logo rounded-lg" />
                </a>

                <div className="hidden md:flex space-x-6 text-center items-center justify-center relative">
                    {/* Services Dropdown - Desktop (Hover) */}

                    <div  className="relative">
                        <button className=" focus:outline-none  font-semibold">
                            How It Works
                        </button>
                        
                    </div>
                                {/* <Link to="/" className="block px-4 py-2 bg-white hover:bg-gray-200 ">
                                    Contact Us
                                </Link> */}

                    <Link
                        to="/login"
                        className="bg-[#6036E1] font-semibold border-2 border-[#6036E1] text-white rounded-[999px] hover:shadow-2xl hover:shadow-[#6036E1] px-4 py-3 hover:text-[#6036E1] hover:bg-white"
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
                   

                    <button
                        className="block w-full text-left px-6 py-3 text-black">
                        How It Work
                    </button>
                    
                    <Link
                        to="/login"
                        className="block ml-5 mt-3 w-[20%] text-center font-semibold border-2 border-[#6036E1] text-white rounded-[999px] px-3 py-3 hover:text-[#6036E1] hover:bg-white mb-5 bg-[#6036E1]"
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
