import React from 'react';
import App from 'next/app';
import "../../styles/index.scss";

import ReactGA from 'react-ga';

import Sidebar from '../components/Sidebar';
import { Router } from 'next/dist/client/router';



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

    componentDidMount(){
        ReactGA.initialize('UA-108070842-2');
     
        Router.events.on('routeChangeStart', (route:string)=>{
            ReactGA.set({ page: route }); // Update the user's current page
            ReactGA.pageview(route); // Record a pageview for the given page
            console.log(route)
        })
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