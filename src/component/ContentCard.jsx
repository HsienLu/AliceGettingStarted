import propTypes from "prop-types";
import ImageWithPlaceholder from "./ImageWithPlaceholder";
import placeholder from "../assets/react.svg";
function ContentCard({ stepText, imgSrc,notice,classStyle }) {
    ContentCard.propTypes = {
        stepText: propTypes.string,
        imgSrc: propTypes.string,
        notice: propTypes.string,
        classStyle: propTypes.object,
    };

   
  return (
    <div className="mb-16">
      <h3 className="starting-guide-list-text" style={{...classStyle}}>{stepText}</h3>
      <p className="text-red-600 text-base mb-4">{notice}</p>
      <ImageWithPlaceholder
        src={imgSrc}
        placeholder={placeholder}
        alt="描述"
      />
      {/* <img src={imgSrc} loading="lazy" alt="" /> */}
    </div>
  );
}
export default ContentCard;