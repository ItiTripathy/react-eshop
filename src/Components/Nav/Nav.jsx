import React from "react";
import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
import Home from "./../Home/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
    return (
        <>
            <nav className={styles.Nav}>
                <NavLink to="/" className={styles.NavLink}>
                    Home
                </NavLink>
                <NavLink to="/Shop" className={styles.NavLink}>
                    Shop
                </NavLink>
                <NavLink to="/ShoppingCart" className={styles.NavLink}>
                    <span>
                        <FontAwesomeIcon icon="fa-solid fa-shop" />
                    </span>
                    Shopping Cart
                </NavLink>
            </nav>
        </>
    );
};

export default Nav;
