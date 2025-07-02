import {forwardRef} from "react";
import './css/Celebrity.css'

const Card = forwardRef(({ id, frontSrc, backSrc, backAlt }, ref) => {
  return (
    <div className="card" id={id} ref={ref}>
      <div className="card-wrapper">
        <div className="flip-card-inner">
          {/* Front side with text */}
          <div className="flip-card-front">
            <img src={frontSrc} alt={backAlt} loading="lazy" width={500} height={500} />
          </div>

          {/* Back side with image */}
          <div className="flip-card-back">
            <img src={backSrc} alt={backAlt} loading="lazy" width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Card;