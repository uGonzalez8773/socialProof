import PropTypes from 'prop-types';

const ImageComponent = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

ImageComponent.propTypes ={
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    
}

export default ImageComponent;
