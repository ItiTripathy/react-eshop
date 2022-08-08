import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./CarouselContainer.module.scss";
import { NavLink } from "react-router-dom";
//import { getCarData } from "../../Services/firestore-utils";
import { useState, useEffect } from "react";
import { getBagsData } from "../../Services/firestore-utils";

const CarouselContainer = () => {
    //const [carData, setCarData] = useState([]);
    const [bagsData, setBagsData] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            const bags = await getBagsData();
            setBagsData(bags);
        };

        wrapper();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <h2 className={styles.Header}>Featured Items</h2>
            <Carousel
                responsive={responsive}
                autoPlay
                infinite={true}
                transitionDuration={100}
                className="carousel-div"
            >
                {bagsData.map((item) => {
                    return (
                        <div key={item.id}>
                            <NavLink to={"/product/" + item.id}>
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
            </Carousel>
        </>
    );
};

export default CarouselContainer;
