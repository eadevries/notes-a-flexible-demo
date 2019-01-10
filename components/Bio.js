import { colors, fonts, sizes, linkStyles } from "../styles/base";

export default props => (
    <React.Fragment>
        <div className="container">
            <img src="/static/bio2 -150px wide.jpg" alt="Elliot de Vries" />
            <div className="text-content">
                <div className="created-by">created by</div>
                <h2>Elliot de Vries</h2>
                <p>
                    <a>email</a> |{" "}
                    <a href="https://github.com/eadevries" target="_blank">
                        github
                    </a>{" "}
                    | <a>linkedin</a>
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
            }
        `}</style>
    </React.Fragment>
);
