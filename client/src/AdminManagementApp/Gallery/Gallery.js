import axios from 'axios';
import React, { useEffect, useState } from 'react'

/**
* @author
* @function Gallery

**/
const Gallery = (props) => {
    const [allGallery, setAllGallery] = useState([])

    useEffect(() => {
        axios.get('/westaGallery')
            .then(res => {
                console.log(res.data)
                setAllGallery(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    })
    return (
        <div>
            Gallery
        </div>
    )
}
export default Gallery
