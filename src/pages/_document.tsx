import Document, { Head, Html, Main, NextScript } from 'next/document';
import ReactGA from 'react-ga';

class HashgeshDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    componentDidMount(){
        console.log(window.location.pathname)
        
        ReactGA.initialize('UA-108070842-2');
        ReactGA.set({ page: window.location.pathname }); // Update the user's current page
        ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default HashgeshDocument
