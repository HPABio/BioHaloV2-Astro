import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: any;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    quality?: number;
    priority?: boolean;
    sizes?: string;
    style?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({
    src,
    alt,
    width,
    height,
    fill,
    className,
    style,
    ...props
}) => {
    // Handle static imports (which are objects with a src property)
    const imageSrc = typeof src === 'object' && src !== null && 'src' in src ? src.src : src;

    const styles: React.CSSProperties = {
        ...style,
        ...(fill ? {
            position: 'absolute',
            height: '100%',
            width: '100%',
            inset: 0,
            objectFit: 'cover',
        } : {}),
    };

    return (
        <img
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            className={className}
            style={styles}
            {...props}
        />
    );
};

export default Image;
