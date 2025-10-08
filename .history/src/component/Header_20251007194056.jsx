import React from 'react';
import { FaGithub } from "react-icons/fa";
import logo from "../img/logo.png"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">

            <Link to="/">
                <div className="flex items-center space-x-2">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-8 h-8"
                    />
                    <h1 className="text-lg font-bold text-indigo-600">HERO.IO</h1>
                </div>
            </Link>


            <nav className="hidden md:flex items-center space-x-6">
                <Link to="/">
                  <a href="#" className="text-gray-700 hover:text-indigo-500 font-medium">Home</a>
                </Link>
                <a href="#" className="text-gray-700 hover:text-indigo-500">Apps</a>
                <a href="#" className="text-gray-700 hover:text-indigo-500">Installation</a>
            </nav>


            <a
                href="https://github.com/nahid-hasann"
                className="flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
            >
                <FaGithub className="mr-2" /> Contribute
            </a>


            <div className="md:hidden">
                <button className="text-gray-700 focus:outline-none">
                    ☰
                </button>
            </div>
        </header>
    );
};

export default Header;