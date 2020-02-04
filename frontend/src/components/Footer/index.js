import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const Footer = (props, context) => (
    <footer className="footer">
        <div className="column">
            <nav className="nav">
                <ul className="list">
                    <li className="listitem">{context.t("About Me")}</li>
                    <li className="listitem">{context.t("Blog")}</li>
                    <li className="listitem">{context.t("Language")}</li>
                </ul>
            </nav>
        </div>
        <div className="column">
            <span className="copyrigt">© 2020 MJ</span>
        </div>
    </footer>
)

Footer.contextTypes = {
    t: PropTypes.func.isRequired
};

export default Footer;
