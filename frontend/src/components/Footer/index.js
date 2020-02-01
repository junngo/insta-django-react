import React from "react";
import styles from "./styles.scss";

const Footer = (props, context) => (
    <footer className="footer">
        <div className="column">
            <nav className="nav">
                <ul className="list">
                    <li className="listitem">About Me</li>
                    <li className="listitem">Blog</li>
                    <li className="listitem">Language</li>
                </ul>
            </nav>
        </div>
        <div className="column">
            <span className="copyrigt">© 2020 MJ</span>
        </div>
    </footer>
)

export default Footer;
