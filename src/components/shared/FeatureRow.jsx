import Button from './Buttons';
import PropTypes from 'prop-types';

export default function FeatureRow({ 
  title, 
  description, 
  image, 
  pattern, 
  patternPositionClasses, 
  isReversed,
  useOuterPattern,
  patternVisibleOnMobile,
  hideBackgroundCircle,
}) {
  return (
    <div className="relative w-full overflow-hidden py-16 lg:py-24">
      
      {!hideBackgroundCircle && (
        <div 
          className={`hidden lg:block absolute top-0 lg:top-1/2 lg:-translate-y-1/2 w-[445px] h-[445px] bg-light-grey rounded-full z-0 
          ${isReversed ? 'left-[-50%] lg:left-0 lg:-translate-x-[75%]' : 'right-[-50%] lg:right-0 lg:translate-x-[75%]'}`}
        />
      )}

      {/* Outer Arrow Pattern */}
      {useOuterPattern && (
        <img
          src={pattern}
          alt=""
          className={`absolute z-30 ${patternVisibleOnMobile ? '' : 'hidden md:block'} transition-all duration-300 ${patternPositionClasses}`}
        />
      )}

      {/* Inner Container */}
      {/* MAGIC FIX: If isReversed is FALSE (Normal), we reverse the row so Text is Left, Image is Right. */}
      {/* If isReversed is TRUE, we use standard row so Image is Left, Text is Right. */}
      <div className={`relative max-w-7xl mx-auto px-8 flex flex-col items-center justify-between gap-16 lg:gap-24 z-10 
        ${isReversed ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
      >
        
        {/* 1. Image Container (Placed FIRST in DOM so it stacks on top for Tablet/Mobile) */}
        <div className="flex-1 relative flex justify-center w-full max-w-[445px] mx-auto lg:mx-0">
          <img 
            src={image} 
            alt={title} 
            className="rounded-full w-full h-auto object-cover relative z-20 aspect-square shadow-sm" 
          />

          {/* Inner Arrow Pattern */}
          {!useOuterPattern && (
            <img 
              src={pattern} 
              alt="" 
              className={`absolute z-30 ${patternVisibleOnMobile ? '' : 'hidden md:block'} transition-all duration-300 ${patternPositionClasses}`} 
            />
          )}
        </div>

        {/* 2. Text Content (Placed SECOND in DOM so it drops below image on Tablet/Mobile) */}
        <div className="flex-1 text-center lg:text-left max-w-[450px]">
          <h2 className="mb-6">{title}</h2>
          <p className="mb-10 text-dim-grey font-sans font-normal text-[15px] leading-[25px] text-center">{description}</p>
          <Button>Learn More</Button>
        </div>

      </div>
    </div>
  );
}

FeatureRow.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  patternPositionClasses: PropTypes.string.isRequired,
  isReversed: PropTypes.bool,
  useOuterPattern: PropTypes.bool,
  patternVisibleOnMobile: PropTypes.bool,
  hideBackgroundCircle: PropTypes.bool,
};

FeatureRow.defaultProps = {
  isReversed: false,
  useOuterPattern: false,
  patternVisibleOnMobile: false,
  hideBackgroundCircle: false,
};

