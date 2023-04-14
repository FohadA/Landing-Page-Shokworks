import React, { useState ,useEffect } from "react";
import axios from "axios";
import CarouselItems from "./CarouselItems";


function CarouselList() {

    const [articles, setArticles] = useState([]); 

    useEffect(()=>{

        /* API CALL */
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2daf23cfa43e476c9f65e81396897851');
            console.log(response)
            setArticles(response.data.articles);
        }
        getArticles();
    }, [])

    /* CAROUSEL ITEMS CALL */
    const carouselArticles = articles.map(article => {
        return (
            <CarouselItems
                title={article.title}
                description={article.description}
                urlToImage={article.urlToImage}
            />
        )
    })
    return (
        
        <div className="carousel-container">
            {carouselArticles}
        </div>
    );
};

export default CarouselList;