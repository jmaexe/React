import React, { useState } from 'react';
import { Character } from '../models/Character';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { useUserContext } from '../hooks/userContext';

type CharacterCardProps = {
  character: Character;
  handleClick: (id: number) => void;
};

const CharacterCard = ({ character, handleClick }: CharacterCardProps) => {
  const [likeChecked, setLikeChecked] = useState<boolean>(false);
  const { setUser } = useUserContext();

  const toggleLike = () => {
    setLikeChecked((prevCheck) => !prevCheck);
    setUser((prevUser) => {
      if (!prevUser?.likes) {
        return { ...prevUser, likes: [character.id] };
      }
      return { ...prevUser, likes: [...prevUser.likes, character.id] };
    });
  };

  return (
    <div
      key={character.name}
      className=" aspect-square card card-compact bg-base-100 w-full max-w-56 max-h-56 2xl:max-w-72 2xl:max-h-72 shadow-xl image-full"
    >
      <figure>
        <img
          className="max-w-md w-full sm:max-w-sm"
          src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
        />
      </figure>
      <div className="card-body items-center text-center flex-col-reverse">
        <div className="flex flex-wrap gap-5 justify-between">
          {/* <label className="swap text-3xl cursor-pointer">
            <input type="checkbox" onChange={toggleLike} />
            <div className="swap-on ">
              <FcLike />
            </div>
            <div className="swap-off">
              <FcLikePlaceholder />
            </div>
          </label> */}
          <button
            className="text-3xl transition-transform active:scale-75 scale-100 duration-100"
            onClick={toggleLike}
          >
            {likeChecked ? <FcLike /> : <FcLikePlaceholder />}
          </button>
          <button className="btn" onClick={() => handleClick(character.id)}>
            more info
          </button>
        </div>
        <h2 className="card-title text-primary text-lg">{character.name} </h2>
        {/* <p className="italic text-secondary">{character.id}</p> */}

        <div className="card-actions justify-around items-center"></div>
      </div>
    </div>
  );
};

export default CharacterCard;
