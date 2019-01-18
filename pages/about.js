import Bio from "../components/Bio";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { colors, fonts, sizes, linkStyles } from "../styles/base";

const About = () => (
    <Layout>
        <Header text="about" fontSize="3.2rem" />
        <div className="container">
            <div>
                <p>
                    <span className="lead">
                        <a
                            href="https://github.com/eadevries/notes-a-flexible-demo"
                            target="_blank"
                        >
                            notes
                        </a>{" "}
                        was created by Elliot de Vries.
                    </span>
                </p>
                <p>
                    Elliot loves old music, guitar, coding, and real science. He
                    spends his time surrounded by Python and JavaScript/Node.
                    For more info, please visit his website{" "}
                    <a href="https://elliotdevries.com" target="_blank">
                        elliotdevries.com
                    </a>
                    .
                </p>
                <div className="contact">
                    <h3>contact</h3>
                    <p>
                        To contact Elliot about questions or opportunities,
                        please feel free to reach out via{" "}
                        <a
                            href="https://elliotdevries.com/contact"
                            target="_blank"
                        >
                            this form
                        </a>{" "}
                        or with any of the social media accounts linked beneath
                        the portrait.
                    </p>
                </div>
            </div>
            <div className="bio">
                <Bio />
            </div>
        </div>
        <style jsx>{`
            p {
                line-height: 2.6rem;
                margin-bottom: ${sizes.md};
                text-align: justify;
            }
            a {
                ${linkStyles}
            }
            h3 {
                color: ${colors.sd};
                font-family: ${fonts.fancy};
                font-size: 2.4rem;
                margin-bottom: ${sizes.md};
                margin-top: ${sizes.md};
            }
            .bio {
                padding: ${sizes.md} 0;
            }
            .container {
                padding-left: ${sizes.md};
                padding-right: ${sizes.md};
            }
            .lead a {
                display: inline-block;
                font-family: ${fonts.fancy};
                font-size: 2.8rem;
                padding-right: 0.5rem;
            }
            @media (min-width: ${sizes.breakpoint}) {
                .container {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    // padding: 0;
                }
                .bio {
                    grid-column-start: 2;
                    grid-column-end: 3;
                    padding: 0 0 ${sizes.md} 0;
                }
            }
        `}</style>
    </Layout>
);

export default About;
