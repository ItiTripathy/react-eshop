import React from "react";
import styles from "./Grid.module.scss";
import { NavLink } from "react-router-dom";
//import { getCarData } from "../../Services/firestore-utils";
import { useState, useEffect } from "react";
import { getBagsData } from "../../Services/firestore-utils";

const Grid = () => {
    /* const [carData, setCarData] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            const cars = await getCarData();
            setCarData(cars);
        };

        wrapper();
    }, []);
 */

    const [bagsData, setBagsData] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            const bags = await getBagsData();
            setBagsData(bags);
        };

        wrapper();
    }, []);

    return (
        <>
            <h3 className={styles.Header}>Products Collection</h3>
            <div className={styles.Grid}>
                {bagsData.map((item, i) => {
                    return (
                        <div key={i}>
                            <NavLink to={"/Product/" + item.id}>
                                <h3>{item.name}</h3>
                                <img
                                    className={styles.Image}
                                    src={item.imgUrl}
                                    alt={item.name}
                                />
                            </NavLink>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Grid;
