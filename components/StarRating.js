import React, { useState } from "react";
import Button from "./Button";
import Icon from "./Icon";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <Button
            type="button"
            key={`star-${index}`}
            onClickFunction={() => setRating(index)}
          >
            <span className="star">
              {index <= rating ? (
                <Icon icon="starFilled" size={24} />
              ) : (
                <Icon icon="starEmpty" size={24} />
              )}
            </span>
          </Button>
        );
      })}
    </div>
  );
};

export default StarRating;
