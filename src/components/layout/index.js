import React from 'react'
import Header from '../header';
import Footer from '../footer';
import ScrollToTop from '../ScrollToTop';

function Layout({ children }) {

    return (
        <div className='relative'>
            <Header />
            <div>{children}</div>
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default Layout