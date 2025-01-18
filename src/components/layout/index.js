import React from 'react'
import Header from '../header';
import Footer from '../footer';
// import Header from '../header'
// import NewHeader from '../newHeader';

function Layout({ children }) {
    console.log(children);

    return (
        <div>
            <Header />
            {/* <NewHeader /> */}
            <div>{children}</div>
            <Footer />

        </div>
    )
}

export default Layout