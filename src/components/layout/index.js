import React from 'react'
import Header from '../header';
import Footer from '../footer';
import Navbar from '@/newComponents/navbar';
// import Header from '../header'
// import NewHeader from '../newHeader';

function Layout({ children }) {

    return (
        <div>
            {/* <Navbar /> */}
            <Header />
            {/* <NewHeader /> */}
            <div>{children}</div>
            <Footer />

        </div>
    )
}

export default Layout