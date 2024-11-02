import React from 'react';
import { imgUrl } from '../utils/constants';

const MovieBox = ({ img }) => {
  return (
    <div className="w-44 h-48 flex-shrink-0 pr-4 "> {/* Fixed width for each box */}
      <img className="w-full h-full object-cover " src={imgUrl + img} alt="Movie backdrop" />
    </div>
  );
};

export default MovieBox;

