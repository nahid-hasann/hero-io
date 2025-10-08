import React from 'react';
import Header from './Header';
import Footer from './Footer';
import errorPage from '../img/error-404.png'

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex justify-center items-center my-[80px]' >
                <div>
                    <img src={errorPage} alt="" />
                    <h1 className='text-[48px] font-semibold' >Oops, page not found!</h1>
                    <p className='text-[20px] text-[#627382] text-center'>The page you are looking for is not available.</p>
                    <button>Go Back!</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;