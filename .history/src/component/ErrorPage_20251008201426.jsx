import React from 'react';
import Header from './Header';
import Footer from './Footer';
import errorPage from '../img/error-404.png'

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex justify-center item' >
                <div>
                    <img src={errorPage} alt="" />
                    <h1>Oops, page not found!</h1>
                    <p>The page you are looking for is not available.</p>
                    <button>Go Back!</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;