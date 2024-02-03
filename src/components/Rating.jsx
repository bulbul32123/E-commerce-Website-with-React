import React from 'react';
import StarRatings from 'react-star-ratings';

export default function Rating({rating}) {
  return (
    <div>
        <StarRatings
          rating={rating}
          starRatedColor="yellow"
          numberOfStars={10}
          name='rating'
          starEmptyColor='gray'
          starDimension='20px'
          starSpacing='2px'
          />
    </div>
  )
}
