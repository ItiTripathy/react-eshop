import React from "react";
import styles from "./Grid.module.scss";
import { NavLink } from "react-router-dom";
import { getCarData } from "../../Services/firestore-utils";
import { useState, useEffect } from "react";

const Grid = () => {
    const [carData, setCarData] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            const cars = await getCarData();
            setCarData(cars);
        };

        wrapper();
    }, []);

    return (
        <>
            <h3 className={styles.Header}>Products Collection</h3>
            <div className={styles.Grid}>
                {carData.map((item, i) => {
                    return (
                        <div key={i}>
                            <NavLink to={"/Product/" + item.id}>
                                <h3>{item.name}</h3>
                                <h3>{item.model}</h3>
                            </NavLink>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Grid;
