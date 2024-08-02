import React from 'react';
import { Character } from './models/Chararcter';
import { Card } from './models/Characters';
type ComicsListProps = {
  characters: Character[];
};
type CardProps = {
  characters: Card[];
};

const CharactersList = ({ characters }: CardProps) => {
  return (
    // grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:gap-x-2
    <div className=" gap-4 flex flex-wrap justify-center">
      {characters.map((character) => (
        <div className="card card-compact bg-base-100 max-w-80 w-auto shadow-xl">
          <figure>
            <img
              className="max-w-md max-h-96"
              // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              src={character.url}
            />
          </figure>
          <div className="card-body">
            {/* <h2 className="card-title">{character.name}</h2> */}
            {/* <p>{character.age}</p> */}
            <h2 className="card-title">{character.id} </h2>
            <p>{character.breeds}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharactersList;
