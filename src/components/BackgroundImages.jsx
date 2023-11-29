import PropTypes from 'prop-types';
import ImageComponent from "./ImageComponent";

const BackgroundImages = ({
  mobileTop,
  mobileBottom,
  desktopTop,
  desktopBottom,
}) => {
  return (
    <div className="absolute">
      <div className="md:hidden">
        <ImageComponent
          src={mobileTop}
          alt="bg-top"
          className="w-full fixed top-0 left-0"
        />
        <ImageComponent
          src={mobileBottom}
          alt="bg-bottom"
          className="-bottom-60 fixed w-full right-0"
        />
      </div>
      <div className="hidden md:block">
        <ImageComponent
          src={desktopTop}
          alt="bg-top"
          className="md:w-[560px]"
        />
        <ImageComponent
          src={desktopBottom}
          alt="bg-bottom"
          className="md:w-3/4 md:fixed md:-bottom-10 md:right-0"
        />
      </div>
    </div>
  );
};

BackgroundImages.propTypes ={
    mobileTop: PropTypes.node.isRequired,
    mobileBottom: PropTypes.node.isRequired,
    desktopTop: PropTypes.node.isRequired,
    desktopBottom: PropTypes.node.isRequired,
}

export default BackgroundImages;
