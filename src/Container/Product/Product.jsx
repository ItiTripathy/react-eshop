import React from "react";
import styles from "./Product.module.scss";
import { NavLink } from "react-router-dom";
import { getCarData } from "../../Services/firestore-utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card/Card";

const Product = () => {
    const [carData, setCarData] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            const cars = await getCarData();
            setCarData(cars);
        };

        wrapper();
    }, []);

    const params = useParams();

    if (carData.length < 1) return <h1>Product does not exsist</h1>;

    const newProduct = carData.find((item) => item.id === params.id);

    return (
        <div className={styles.Product}>
            <h1 className={styles.Header}>Product Information</h1>

            <Card item={newProduct} />
        </div>
    );
};

export default Product;
