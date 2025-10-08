import React from 'react';
import { FaGooglePlay, FaApple } from "react-icons/fa";
import heroImg from "../img/hero.png"
import AppsCard from './AppsCard';
import { Link } from 'react-router-dom';

const Banner = ({ datas }) => {
    return (
        <div>
            <section className="bg-gray-50 text-center pt-16">

                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4"> We Build <span className="text-[#632ee3]">Productive</span> Apps</h1>


                <p className="max-w-2xl mx-auto text-gray-500 mb-8"> At <span className="font-bold text-[#392f5a]">HERO.IO</span>, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.  Our goal is to turn your ideas into digital experiences that truly make an impact. </p>


                <div className="flex justify-center gap-4 mb-12">
                    <a href="https://play.google.com" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-lg shadow-sm transition"> <FaGooglePlay /> Google Play </a>
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-lg shadow-sm transition"> <FaApple /> App Store </a>
                </div>


                <div className="flex justify-center">
                    <img src={heroImg} className="w-full max-w-3xl rounded-xl"/>
                </div>


                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-10">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                        Trusted By Millions, Built For You
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div>
                            <p>Total Downloads</p>
                            <p className="text-4xl font-bold">29.6M</p>     
                            <p className="text-sm opacity-80">21% More Than Last Month</p>
                        </div>
                        <div>
                             <p>Total Reviews</p>
                            <p className="text-4xl font-bold my-[]">906K</p>                        
                            <p className="text-sm opacity-80">46% More Than Last Month</p>
                        </div>
                        <div>
                            <p>Active Apps</p>
                            <p className="text-4xl font-bold">132+</p>                         
                           <p className="text-sm opacity-80">31 More Will Launch</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-[70px] w-full max-w-[1440px] mx-auto px-6">
                
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-gray-800">
                        Trending Apps
                    </h1>
                    <p className="text-base md:text-lg text-gray-500 mt-2">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

                
                <div className="grid justify-center items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {datas.map((data) => (
                        <AppsCard key={data.id} data={data} />
                    ))}
                </div>
                <div className='mx-auto flex justify-center my-[40px]' >
                    <Link to="/apps" >
                       <button className="btn bg-[#7841e8] text-white">Show All</button>
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Banner;