import React, { FC } from 'react';
import { Character } from './models/Chararcter';
type ComicsCardProps = {
  data: Character;
};

const ComicsCard: FC<ComicsCardProps> = ({ data }) => {
  const { name, age } = data;

  return (
    <div className="card card-compact bg-base-100 max-w-80 w-auto shadow-xl">
      <figure>
        <img
          // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{age}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ComicsCard;
