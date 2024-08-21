import React, { memo, useMemo, useState } from 'react';
import { Character } from '../models/Character';
import CharacterCard from './CharacterCard';
type CharactersListProps = {
  characters: Character[];
  characterId?: number | undefined;
  setCharacterId: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const CharactersList = ({
  characters,
  characterId,
  setCharacterId,
}: CharactersListProps) => {
  const character = useMemo(() => {
    console.log('memo2');
    return characters.find((c) => c.id === characterId);
  }, [characterId, characters]);

  return (
    <div className=" gap-4 flex flex-wrap justify-center items-center gap-y-6">
      {characters.length == 0 ? (
        <p>Nessun Personaggio presente</p>
      ) : (
        characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            setCharacterId={setCharacterId}
          />
        ))
      )}
    </div>
  );
};

export default memo(CharactersList);
