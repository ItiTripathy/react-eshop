import React from "react";
import styles from "./Product.module.scss";
import { NavLink } from "react-router-dom";
//import { getCarData } from "../../Services/firestore-utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card/Card";
import { getBagsData } from "../../Services/firestore-utils";

const Product = () => {
    const [bagsData, setBagsData] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            const bags = await getBagsData();
            setBagsData(bags);
        };

        wrapper();
    }, []);

    const params = useParams();

    if (bagsData.length < 1) return <h1>Product does not exsist</h1>;

    const newProduct = bagsData.find((item) => item.id === params.id);

    return (
        <div className={styles.Product}>
            <h1 className={styles.Header}>Product Information</h1>

            <Card item={newProduct} />
        </div>
    );
};

export default Product;
