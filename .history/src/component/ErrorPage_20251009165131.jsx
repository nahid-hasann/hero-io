import React from 'react';
import Header from './Header';
import Footer from './Footer';
import errorPage from '../img/error-404.png'

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex justify-center items-center my-[80px]' >
                <div className='flex flex-col justify-center items-center'>
                    <img src={errorPage} alt="" />
                    <h1 className='text-[48px] font-semibold text-center mt-[20px]' >Oops, page not found!</h1>
                    <p className='text-[20px] text-[#627382] text-center my-[10px]'>The page you are looking for is not available.</p>
                    <button className="btn bg-[#6e37e6] text-white">Go </button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;