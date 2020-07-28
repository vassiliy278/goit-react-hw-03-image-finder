import React from 'react';
import css from '../../style.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types';

export default function ImageGallery({images}) {
    return (
        <>
        {images && <ul className={css.ImageGallery}>
            {images.map(element => 
            <ImageGalleryItem 
            src={element.webformatURL}
            alt={element.tags}
            fullScreen={element.largeImageURL}
            id={element.id}
            key={element.id}
            />)}
        </ul>}
        </>
    )
}
ImageGallery.propTypes = {
    images: PropTypes.array
}