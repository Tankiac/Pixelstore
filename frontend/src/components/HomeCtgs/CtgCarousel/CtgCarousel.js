import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import classes from "./CtgCarousel.module.css"

const CtgCarousel = (props) => {
    const dispatch = useDispatch();

    const onClickCtg = (category) => {
        dispatch({
            type: "setResultBar",
            payload: {
                resultBar: {
                    content: category,
                    showing: "category"
                }
            }
        })
    }

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1500 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1500, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    let attachedClasses = [classes.CtgCarousel, classes.SmallScreenSize];

    return (
        <div className={attachedClasses.join(" ")}>
            <Carousel   
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                <div className={classes.ImgContainer}><Link to={`categoryshow/laptops`}><img className={classes.CarouselImg} onClick={() => onClickCtg("Laptops")} src="https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310795/InteractiveGallery/pixelstore/laptop3_mua9qa.jpg"/></Link></div>
                <div className={classes.ImgContainer}><Link to={`categoryshow/desktops`}><img className={classes.CarouselImg} onClick={() => onClickCtg("Desktops")} src="https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310742/InteractiveGallery/pixelstore/desktop1_aln2dn.jpg"/></Link></div>
                <div className={classes.ImgContainer}><Link to={`categoryshow/headsets`}><img className={classes.CarouselImg} onClick={() => onClickCtg("Headsets")} src="https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310757/InteractiveGallery/pixelstore/headset2_qoynfe.png"/></Link></div>
                <div className={classes.ImgContainer}><Link to={`categoryshow/phones`}><img className={classes.CarouselImg} onClick={() => onClickCtg("Phones")} src="https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310806/InteractiveGallery/pixelstore/phone2_clljrh.jpg"/></Link></div>
            </Carousel>
        </div>
    )
}

export default CtgCarousel;