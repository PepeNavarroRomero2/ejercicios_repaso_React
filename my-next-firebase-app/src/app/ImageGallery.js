import React from 'react';
import ImageCard from './ImageCard';

const ImageGallery = () => {
    const images = [
        { id: 1, src: 'https://via.placeholder.com/150', alt: 'Imagen 1' },
        { id: 2, src: 'https://via.placeholder.com/150', alt: 'Imagen 2' },
        { id: 3, src: 'https://via.placeholder.com/150', alt: 'Imagen 3' },
        { id: 4, src: 'https://via.placeholder.com/150', alt: 'Imagen 4' },
    ];

    return (
        <div style={styles.gallery}>
            {images.map((image) => (
                <ImageCard key={image.id} src={image.src} alt={image.alt} />
            ))}
        </div>
    );
};

const styles = {
    gallery: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '20px',
    },
};

export default ImageGallery;
