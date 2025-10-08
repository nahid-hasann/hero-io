import React from 'react';
import Header from './Header';
import Footer from './Footer';
import errorPage from '../img/error-404.png'

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
              <div   >
                <img src={errorPage} alt="" />
              </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;