import  { useState } from 'react';
import propTypes from "prop-types";
const Spinner = () => {
    return (
<div style={{
  margin: 'auto',
  border: '5px solid #03a9f4', 
  borderTop: '5px solid #BBE2EC', 
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  animation: 'spin 1s linear infinite'
}}></div>
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
