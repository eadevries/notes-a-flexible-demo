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
                    <a
                        href="https://github.com/eadevries/notes-a-flexible-demo"
                        target="_blank"
                    >
                        Notes (a flexible demo)
                    </a>{" "}
                    was created by Elliot de Vries.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quia blanditiis cum ducimus obcaecati esse quibusdam odio
                    temporibus repudiandae corporis? Asperiores?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis dicta consequuntur non tenetur error obcaecati
                    possimus molestiae suscipit totam!
                </p>
                <div className="contact">
                    <h3>contact</h3>
                    <p>
                        To contact Elliot about questions or opportunities,
                        please feel free to email him at email@address.com
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
            @media (min-width: ${sizes.breakpoint}) {
                .container {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
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
