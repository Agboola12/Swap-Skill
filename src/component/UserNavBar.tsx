import { useState, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const UserNavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    return (
        <nav className="shadow-md w-full z-50 text-black background ">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="/" className="flex gap-3 items-center">
                    <img src={logo} alt="Logo" className="w-24 logo rounded-lg" />
                    <p className="font-bold text-xl text-white">Adeleke Skill Swap</p>
                </a>

                <div className="hidden md:flex space-x-6 text-center items-center justify-center relative">

                    <Link to="/dashboard" className="block px-4 py-2 text-white font-semibold ">
                        Dashboard
                    </Link>
                    <Link to="/my-skill" className="block px-4 py-2 text-white font-semibold ">
                        My Skills
                    </Link>
                    <Link to="/browse-skill" className="block px-4 py-2 text-white font-semibold ">
                        Browse Skills
                    </Link>
                    <Link to="/swap-request" className="block px-4 py-2 text-white font-semibold ">
                        Swap Requests
                    </Link>
                    <Link to="/profile" className="block px-4 py-2 text-white font-semibold ">
                        Profile
                    </Link>
                    <Link to="/login" className="block px-4 py-2 text-white font-semibold ">
                        LogOut
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden text-white" onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden shadow-md background">

                    <Link
                        to="/dashboard"
                        className="block  font-medium text-left px-10 py-3 text-white hover:bg-gray-50 hover:text-[#7C33FF]"
                        onClick={() => setIsOpen(false)}
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/my-skills"
                        className="block  font-medium text-left px-10 py-3 text-white hover:bg-gray-50 hover:text-[#7C33FF]"
                        onClick={() => setIsOpen(false)}
                    >
                        My Skills
                    </Link>

                    <Link
                        to="/browse-skills"
                        className="block  font-medium text-left px-10 py-3 text-white hover:bg-gray-50 hover:text-[#7C33FF]"
                        onClick={() => setIsOpen(false)}
                    >
                        Browse Skills
                    </Link>

                    <Link
                        to="/swap-request"
                        className="block  font-medium text-left px-10 py-3 text-white hover:bg-gray-50 hover:text-[#7C33FF]"
                        onClick={() => setIsOpen(false)}
                    >
                        Swap Request
                    </Link>
                   
                    <Link
                        to="/profile"
                        className="block  font-medium text-left px-10 py-3 text-white hover:bg-gray-50 hover:text-[#7C33FF]"
                        onClick={() => setIsOpen(false)}
                    >
                        Profile
                    </Link>

                </div>
            )}
        </nav>
    );
};

export default UserNavBar;
