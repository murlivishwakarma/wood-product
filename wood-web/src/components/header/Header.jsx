import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.svg";
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed top-0 z-50 w-full h-auto  px-4 md:px-8 lg:px-20">
            <div className="flex items-center justify-between h-20">
                <img src={logo} className="w-30 md:w-35" alt="Logo" />
                
                {/* Desktop Menu */}
                <div className="hidden md:flex text-white space-x-6 lg:space-x-20 font-semibold">
                    <Link to="/galarry" className="hover:text-gray-300 transition-colors">Gallery</Link>
                    <Link to="/price" className="hover:text-gray-300 transition-colors">Prices</Link>
                    <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
                    <Link to="/contact" className="hover:text-gray-300 transition-colors">Contacts</Link>
                </div>
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? 'Close' : 'Menu'}
                </button>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden flex flex-col text-white space-y-4 py-4">
                    <Link to="/galarry" className="hover:text-gray-300 transition-colors">Gallery</Link>
                    <Link to="/price" className="hover:text-gray-300 transition-colors">Prices</Link>
                    <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
                    <Link to="/contact" className="hover:text-gray-300 transition-colors">Contacts</Link>
                </div>
            )}
        </div>
    );
}

