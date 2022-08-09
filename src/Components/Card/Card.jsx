import React from "react";
import styles from "./Card.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addItemToCart } from "../../Services/firestore-utils";

const Card = ({ item }) => {
    const [count, setCount] = useState(1);
    let navigate = useNavigate();
    let colorArr = item.colors;
    let sizeArr = item.sizes;

    const increment = (n) => {
        const newCount = count + n;
        setCount(newCount);
    };

    const handleAddToCart = (item, count) => {
        let cartItem = {
            name: item.name,
            quantity: count,
            price: item.price,
        };

        addItemToCart(cartItem);
    };

    return (
        <div className={styles.Card}>
            <h2>{item.name}</h2>
            <img className={styles.Image} src={item.imgUrl} alt={item.name} />
            <br />
            <label>Price : ${item.price}</label>

            <div>
                <label>Select Color:</label>
                <select className={styles.Color}>
                    {colorArr.map((item, i) => (
                        <option key={i} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>Select Size :</label>
                <select className={styles.Size}>
                    {sizeArr.map((item, i) => (
                        <option key={i} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>Favourite: </label>
                <input
                    type="radio"
                    id="yes"
                    name="Favourite"
                    value="Yes"
                    defaultChecked
                />
                <label>Yes</label>
                <input type="radio" id="no" name="Favourite" value="No" />
                <label>No</label>
            </div>

            <div className={styles.Count}>
                <button
                    className={styles.Increment}
                    onClick={() => increment(-1)}
                >
                    -
                </button>
                <p>{count}</p>
                <button
                    className={styles.Increment}
                    onClick={() => increment(1)}
                >
                    +
                </button>
            </div>

            <button
                className={styles.Button}
                onClick={() => {
                    handleAddToCart(item, count);
                    navigate("/ShoppingCart");
                }}
            >
                Add to cart
            </button>
        </div>
    );
};

export default Card;
