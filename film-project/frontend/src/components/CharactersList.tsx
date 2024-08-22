import { memo } from 'react';
import { Character } from '../models/Character';
import CharacterCard from './CharacterCard';
type CharactersListProps = {
  characters: Character[];
  handleClick: (id: number) => void;
};

const CharactersList = ({ characters, handleClick }: CharactersListProps) => {
  return (
    <div className=" gap-4 flex flex-wrap justify-center items-center gap-y-6">
      {characters.length == 0 ? (
        <p>Nessun Personaggio presente</p>
      ) : (
        characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            handleClick={handleClick}
          />
        ))
      )}
    </div>
  );
};

export default memo(CharactersList);
