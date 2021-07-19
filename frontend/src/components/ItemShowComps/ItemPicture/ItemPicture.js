import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./ItemPicture.module.css";

const ItemPicture = (props) => {
    const showOneItem = {
        oneItem: {
          breakpoint: { max: 10000, min: 0 },
          items: 1
        }
      };

    return (
        <div className={classes.ItemPicture}>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={showOneItem}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                <div className={classes.ImgContainer}><img className={classes.CarouselImg} src={props.pictures[0]}/></div>
                <div className={classes.ImgContainer}><img className={classes.CarouselImg} src={props.pictures[1]}/></div>
            </Carousel>
        </div>
    )
}

export default ItemPicture;