import Head from "next/head";

import NavBar from "./NavBar";
import { globalStyles } from "../styles/base";

const Layout = props => (
    <React.Fragment>
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
                key="viewport"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <link
                href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Racing+Sans+One"
                rel="stylesheet"
            />
            <style>{globalStyles}</style>
        </Head>
        <NavBar />
        <div>{props.children}</div>
        <style jsx>{`
            div {
                margin: 0 auto;
                max-width: 800px;
                width: 90vw;
            }
        `}</style>
    </React.Fragment>
);

export default Layout;
