import PropTypes from 'prop-types';
import { Avatar } from 'flowbite-react';
export function Image (props) {
    
    return (
        <>
        <Avatar img={props.src}
        alt={props.alt}
        style={{
            width: props.width,
            height: props.height
        }}
        className={props.className} rounded
        />
        </>
    );
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    className: PropTypes.string // Add this line
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired // Add this line
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired // Add this line
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};
