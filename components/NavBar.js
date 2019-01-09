import Link from "next/link";

import { colors, fonts, sizes } from "../styles/base";

const NavBar = () => (
    <React.Fragment>
        <div className="container">
            <div className="navbar">
                <div className="logo">notes</div>
                <div className="navlinks">
                    <Link href="/">
                        <a>home</a>
                    </Link>
                    <Link href="/dashboard">
                        <a>dashboard</a>
                    </Link>
                    <Link href="/preferences">
                        <a>preferences</a>
                    </Link>
                    <Link href="/about">
                        <a>about</a>
                    </Link>
                </div>
            </div>
        </div>
        <style jsx>{`
            .container {
                background-color: ${colors.bg};
                border-bottom: 2px solid ${colors.sd};
                display: flex;
                justify-content: space-around;
                margin-bottom: ${sizes.md};
            }
            .logo {
                align-self: center;
                color: ${colors.sd};
                font-family: ${fonts.fancy};
                font-size: 2.4rem;
                padding: ${sizes.xs} ${sizes.sm};
            }
            .navbar {
                align-items: center;
                display: flex;
                justify-content: flex-start;
                width: 800px;
                padding: ${sizes.sm} 0;
            }
            .navlinks {
                color: ${colors.fg};
                display: flex;
            }
            .navlinks a {
                color: ${colors.fg};
                display: block;
                margin-right: ${sizes.lg};
                text-decoration: none;
            }
            .navlinks a:first-child {
                margin-left: ${sizes.lg};
            }
            .navlinks a:hover {
                color: ${colors.sd};
            }
        `}</style>
    </React.Fragment>
);

export default NavBar;
