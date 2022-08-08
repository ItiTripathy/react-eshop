import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./CarouselContainer.module.scss";
import { NavLink } from "react-router-dom";
import { getCarData } from "../../Services/firestore-utils";
import { useState, useEffect } from "react";

const CarouselContainer = () => {
    const [carData, setCarData] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            const cars = await getCarData();
            setCarData(cars);
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
                {carData.map((item) => {
                    return (
                        <div key={item.id}>
                            <NavLink to={"/product/" + item.id}>
                                <h3>{item.name}</h3>
                                <h3>{item.model}</h3>
                            </NavLink>
                        </div>
                    );
                })}
            </Carousel>
        </>
    );
};

export default CarouselContainer;
