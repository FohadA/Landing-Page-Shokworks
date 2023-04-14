import React from "react";
import '../style-sheets/carouselItems.css';

function CarouselItems({ title, description, urlToImage }) {
    return(
        <div>
            <div className="item">
                <img className="carousel-img" src={urlToImage} alt="Icon Notice" />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default CarouselItems;