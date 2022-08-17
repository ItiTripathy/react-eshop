import React from "react";
import styles from "./ShoppingCart.module.scss";
import { useEffect, useState } from "react";
import { readCart, deleteItem } from "../../Services/firestore-utils";

const ShoppingCart = () => {
    const [cartData, setCartData] = useState([]);

    const getCartData = async () => {
        return await readCart();
    };

    useEffect(() => {
        const wrapper = async () => {
            const cart = await getCartData();
            setCartData(cart);
        };

        wrapper();
    }, []);

    const handleDelete = (id) => {
        deleteItem(id);
    };

    return (
        <div>
            <h1 className={styles.Header}>Items in Cart</h1>
            {cartData.map((item) => (
                <div key={item.id}>
                    <h2 className={styles.Header}>{item.name}</h2>
                    <p>price : ${item.price}</p>
                    <p>quantity : {item.quantity}</p>
                    <button onClick={() => handleDelete(item.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ShoppingCart;
