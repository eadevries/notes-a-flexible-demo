import { colors, fonts, sizes, linkStyles } from "../styles/base";

export default props => (
    <React.Fragment>
        <div className="container">
            <img src="/static/bio2 -150px wide.jpg" alt="Elliot de Vries" />
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
        <style jsx>{`
            h2 {
                margin-bottom: ${sizes.md};
                margin-top: ${sizes.sm};
            }
            img {
                border-radius: 50%;
                border: 2px solid ${colors.sd};
            }
            .container {
                min-width: 200px;
                text-align: center;
            }
            .created-by {
                color: ${colors.tr};
                font-family: ${fonts.fancy};
                font-size: 2rem;
            }
            a {
                ${linkStyles}
            }
        `}</style>
    </React.Fragment>
);
