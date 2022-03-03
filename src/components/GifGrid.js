import { useState, useEffect, Fragment} from "react"
import React from 'react'
import { GifGridItem } from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect( ()  => {
        getGifs(category)
            .then(setImages);
    }, [])

    

  return (
    <Fragment>
        <h3>{category}</h3>
        <div className="card-grid">
            {
                images.map( img =>(
                <GifGridItem 
                    key={img.id}
                    {...img}
                />
                ))
            }
        </div>
    </Fragment>
  )
}

