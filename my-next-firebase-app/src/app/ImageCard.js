import React from 'react';

const ImageCard = ({ src, alt }) => {
    return (
        <div style={styles.card}>
            <img src={src} alt={alt} style={styles.image} />
            <p>{alt}</p>
        </div>
    );
};

const styles = {
    card: {
        margin: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        textAlign: 'center',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '5px',
    },
};

export default ImageCard;
