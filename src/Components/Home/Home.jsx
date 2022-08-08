import React from "react";
import styles from "./Home.module.scss";
import image from "./../../Images/Home_Background.jpg";

const Home = () => {
    return (
        <>
            <div>
                <h1 className={styles.Header}>Welcome</h1>
                <img src={image}></img>
            </div>
        </>
    );
};

export default Home;
