import React from "react";
import CtgCard from "../CtgCard/CtgCard";

import classes from "./CardLayout.module.css"

const CardLayout = (props) => {
    let attachedClasses = [classes.CardLayout, "row", "justify-content-center"];
    let cards = [
        {imgURL: "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310795/InteractiveGallery/pixelstore/laptop1_rvnn3i.jpg", title: "Laptops", category: "laptops"},
        {imgURL: "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310742/InteractiveGallery/pixelstore/desktop3_ag1vj9.jpg", title: "Desktops", category: "desktops"},
        {imgURL: "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310806/InteractiveGallery/pixelstore/phone3_icn64n.jpg", title: "Phones", category: "phones"},
        {imgURL: "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310777/InteractiveGallery/pixelstore/keyboard4_jggsei.png", title: "Keyboards", category: "keyboards"},
        {imgURL: "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310757/InteractiveGallery/pixelstore/headset1_ap9szs.png", title: "Headsets", category: "headsets"},
        {imgURL: "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1625595638/InteractiveGallery/pixelstore/speakers2_umrfqo.png", title: "Speakers", category: "speakers"},
        {imgURL: "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1625595650/InteractiveGallery/pixelstore/tablet3_rb4yln.jpg", title: "Tablets", category: "tablets"},
        {imgURL: "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1625595668/InteractiveGallery/pixelstore/console1_ehiy13.png", title: "Consoles", category: "consoles"}
    ];

    return (
        <div className={attachedClasses.join(' ')}>
            {cards.map((card, index) => 
            <CtgCard 
                imgURL={card.imgURL} 
                title={card.title} 
                category={card.category} 
                key={index}
            />)}
        </div>
    )
}

export default CardLayout;