import React from 'react';
import App from 'next/app';
import "../../styles/index.scss";


import Sidebar from '../components/Sidebar';



class HashgeshApp extends App {

    constructor(props) {
        super(props)
    }

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        //console.log(this.props);
        return (
            <React.Fragment>
                {/* <Header name='Header' /> */}
                <Sidebar></Sidebar>
                <div className='mContentContainer'>
                    <Component {...pageProps} />
                </div>

                {/* <Footer name='Footer' /> */}
            </React.Fragment>

        );
    }
}

export default HashgeshApp