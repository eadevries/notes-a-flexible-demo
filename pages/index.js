import Link from "next/link";
import ReactGA from "react-ga";

import Bio from "../components/Bio";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { colors, fonts, sizes, linkStyles } from "../styles/base";

class Index extends React.Component {
    componentDidMount() {
        if (!window.GAInitialized) {
            ReactGA.initialize("UA-132781874-1");
            window.GAInitialized = true;
        }
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        return (
            <Layout>
                <Header text="notes" tagline="a flexible demo" />
                <div className="container">
                    <div className="creator">
                        <Bio />
                    </div>
                    <div className="technologies">
                        <h3>technologies</h3>
                        <p>
                            <a
                                href="https://github.com/eadevries/notes-a-flexible-demo"
                                target="_blank"
                            >
                                Notes
                            </a>{" "}
                            was created to be a quick but flexible example of
                            the use of several prominent web technologies,
                            including{" "}
                            <a href="https://nextjs.org/" target="_blank">
                                NextJS
                            </a>
                            ,{" "}
                            <a href="https://reactjs.org/" target="_blank">
                                React
                            </a>
                            , and{" "}
                            <a href="https://redux.js.org/" target="_blank">
                                Redux
                            </a>
                            .
                        </p>
                        <p>
                            React was chosen because it is highly suited for
                            apps designed for a single page (or only a few
                            pages).
                        </p>
                        <p>
                            NextJS was used to allow for server-side rendering
                            (SSR) and intuitive page-based routing.
                        </p>
                        <p>
                            For data persistence, this demo currently uses the
                            browser's own{" "}
                            <a
                                href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"
                                target="_blank"
                            >
                                Web Storage API
                            </a>{" "}
                            to save notes in the few MB of data the browser
                            allows each domain to store on the user's own hard
                            drive. For the purposes of a demo, this has the
                            simple advantage of allowing a user to try out the
                            app without having to sign in, though still
                            persisting any data they enter even after the page
                            is closed.
                        </p>
                        <p>
                            However, the app is intended to be modular, with
                            alternative backends planned for implementation in
                            the near future. These will allow for examples of
                            persistence in e.g.{" "}
                            <a href="https://www.mongodb.com/" target="_blank">
                                MongoDB
                            </a>
                            ,{" "}
                            <a
                                href="https://firebase.google.com/"
                                target="_blank"
                            >
                                Google Firestore/Firebase
                            </a>
                            , and{" "}
                            <a href="https://graphql.org/" target="_blank">
                                GraphQL/Apollo
                            </a>
                            .
                        </p>
                    </div>
                    <div className="features">
                        <h3>features</h3>
                        <p>
                            In addition to adding, editing and removing notes,
                            this app allows them to be filtered by text and
                            sorted by name and creation date.
                        </p>
                        <p>
                            The preferences pages allows configuring the default
                            sort, as well as whether the sort and filter
                            settings should be saved.
                        </p>
                        <p>
                            The notes have been created so that the note body
                            can include{" "}
                            <a
                                href="https://daringfireball.net/projects/markdown/"
                                target="_blank"
                            >
                                Markdown
                            </a>{" "}
                            formatting. To see how this works, try copying some
                            of the examples from this{" "}
                            <a
                                href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
                                target="_blank"
                            >
                                Markdown cheatsheet
                            </a>{" "}
                            into one of your notes.
                        </p>
                    </div>
                    <div className="repo">
                        <h3>repository</h3>
                        <p>
                            To view the full repository on Github, click{" "}
                            <a
                                href="https://github.com/eadevries/notes-a-flexible-demo"
                                target="_blank"
                            >
                                here
                            </a>
                            .
                        </p>
                    </div>
                    <div className="demo-link">
                        <Link href="/dashboard">
                            <button>Try it out!</button>
                        </Link>
                    </div>
                </div>
                <style jsx>{`
                    h3 {
                        color: ${colors.sd};
                        font-family: ${fonts.fancy};
                        font-size: 2.4rem;
                        margin-bottom: ${sizes.md};
                        margin-top: ${sizes.md};
                    }
                    p {
                        font-size: 1.4rem;
                        line-height: 2.2rem;
                        margin-bottom: ${sizes.sm};
                        text-align: justify;
                    }
                    a {
                        ${linkStyles}
                    }
                    .container {
                        display: flex;
                        flex-direction: column;
                        padding-left: ${sizes.md};
                        padding-right: ${sizes.md};
                    }
                    .demo-link {
                        order: 2;
                    }
                    .technologies {
                        order: 3;
                    }
                    .features {
                        order: 4;
                    }
                    .repo {
                        order: 5;
                    }
                    .creator {
                        order: 6;
                        padding: ${sizes.md} 0;
                    }
                    .demo-link button {
                        border: 1px solid ${colors.sd};
                        background-color: #333;
                        box-shadow: 2px 2px 2px 1px #222;
                        color: ${colors.tr};
                        padding: ${sizes.sm} ${sizes.md};
                        font-family: ${fonts.fancy};
                        font-size: 2.6rem;
                    }
                    .demo-link button:active {
                        background-color: #444;
                        border: 1px solid white;
                        box-shadow: unset;
                    }
                    .demo-link button:hover {
                        cursor: pointer;
                    }


                    @media (min-width: ${sizes.breakpoint}) {
                        p {
                            font-size: 1.6rem;
                            line-height: 2.5rem;
                            margin-bottom: ${sizes.md};
                        }
                        .container {
                            display: grid;
                            grid-column-gap: ${sizes.lg};
                            grid-template-columns: 3fr 1fr;
                            grid-template-areas "technologies creator"
                                                "technologies demo";
                        }
                        .demo-link {
                            grid-area: demo;
                            justify-self: center;
                        }
                        .creator {
                            align-self: start;
                            grid-area: creator;
                            padding: 0 0 ${sizes.md} 0;
                        }
                        .technologies {
                            grid-area: technologies;
                        }
                        .features {
                            grid-column-start: 1;
                            grid-column-end: 2;
                        }
                        .repo {
                            grid-column-start: 1;
                            grid-column-end: 2;
                        }
                    }
                `}</style>
            </Layout>
        );
    }
}

export default Index;
