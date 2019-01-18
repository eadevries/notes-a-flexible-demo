import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors, fonts, sizes, linkStyles } from "../styles/base";

export default props => (
    <React.Fragment>
        <div className="container">
            <img src="/static/bio2 -150px wide.jpg" alt="Elliot de Vries" />
            <div className="text-content">
                <div className="created-by">created by</div>
                <h2>Elliot de Vries</h2>
                <p>
                    <a href="https://github.com/eadevries" target="_blank">
                        <FontAwesomeIcon icon={["fab", "github-square"]} />
                    </a>
                    <a
                        href="http://www.linkedin.com/in/elliotdevries"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                    <a
                        href="https://twitter.com/elliotadevries"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={["fab", "twitter-square"]} />
                    </a>
                </p>
            </div>
        </div>
        <style jsx>{`
            img {
                border-radius: 50%;
                border: 2px solid ${colors.sd};
                display: block;
                height: 91px;
                margin: 0 ${sizes.md} 0 0;
                width: 75px;
            }
            .container {
                display: flex;
                flex-direction: row;
            }
            .created-by {
                color: ${colors.tr};
                font-family: ${fonts.fancy};
                font-size: 2rem;
                padding: ${sizes.xs} 0 0 0;
            }
            h2 {
                margin-bottom: ${sizes.sm};
                margin-top: ${sizes.xs};
            }
            .text-content {
                text-align: center;
            }
            a {
                ${linkStyles}
            }

            p {
                display: flex;
                font-size: 2.5rem;
                justify-content: space-around;
            }

            @media (min-width: ${sizes.breakpoint}) {
                .container {
                    align-items: center;
                    flex-direction: column;
                    min-width: 200px;
                    text-align: center;
                }
                img {
                    justify-self: center;
                    height: 182px;
                    width: 150px;
                }
                .created-by {
                    padding: 0;
                }
                h2 {
                    margin-bottom: ${sizes.md};
                    margin-top: ${sizes.sm};
                }

                p {
                    font-size: 3.5rem;
                }
            }
        `}</style>
    </React.Fragment>
);
