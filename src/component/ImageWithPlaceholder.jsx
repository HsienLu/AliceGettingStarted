import  { useState } from 'react';
import propTypes from "prop-types";
const Spinner = () => {
    return (
      <div className="mx-auto border-4 border-gray-200 border-t-blue-500 rounded-full w-10 h-10 animate-spin"></div>
    );
  }
function ImageWithPlaceholder({ src, alt }) {
    ImageWithPlaceholder.propTypes = {
        src: propTypes.string,
        alt: propTypes.string,
        
    };
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div style={{ position: 'relative', width: 'auto', height: 'auto' }}>
      {!loaded && !error && (
        <div className='' style={{ width: '100%', height: 'auto', display: 'block' }}>
            <Spinner></Spinner>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={{ width: '100%', height: 'auto', display: loaded ? 'block' : 'none' }}
      />
      
      
    </div>
  );
}

export default ImageWithPlaceholder;
