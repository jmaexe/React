import React from 'react';
import { Character } from '../models/Character';

type CharacterModalContentProps = {
  character: Character;
};

const CharacterModalContent = ({ character }: CharacterModalContentProps) => {
  return <div>CharacterModalContent {character.name}</div>;
};

export default CharacterModalContent;
