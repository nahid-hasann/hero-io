import React from 'react';
import { FaGooglePlay, FaApple } from "react-icons/fa";
import heroImg from "../img/hero.png"

const Banner = () => {
    return (
        <div>
            <section className="bg-gray-50 text-center pt-16">
               
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                    We Build <span className="text-purple-600">Productive</span> Apps
                </h1>

                
                <p className="max-w-2xl mx-auto text-gray-500 mb-8">
                    At <span className="font-semibold text-indigo-600">HERO.IO</span>, we craft innovative apps
                    designed to make everyday life simpler, smarter, and more exciting.
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>

                
                <div className="flex justify-center gap-4 mb-12">
                    <a
                        href="https://play.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-lg shadow-sm transition"
                    >
                        <FaGooglePlay /> Google Play
                    </a>
                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-lg shadow-sm transition"
                    >
                        <FaApple /> App Store
                    </a>
                </div>

                
                <div className="flex justify-center">
                    <img
                        src={heroImg}
                        alt="Hero App Preview"
                        className="w-full max-w-3xl rounded-xl"
                    />
                </div>

                
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-10">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                        Trusted By Millions, Built For You
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div>
                            <p className="text-4xl font-bold">29.6M</p>
                            <p>Total Downloads</p>
                            <p className="text-sm opacity-80">21% More Than Last Month</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold">906K</p>
                            <p>Total Reviews</p>
                            <p className="text-sm opacity-80">46% More Than Last Month</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold">132+</p>
                            <p>Active Apps</p>
                            <p className="text-sm opacity-80">31 More Will Launch</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-[70px]' >
                <div className='text-center' >
                    <h1 className='text-[48px] font-bold'>Trending Apps</h1>
                    <p className='text-[20px] text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
                </div>
            </section>
        </div>
    );
};

export default Banner;