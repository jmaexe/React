import { useFetchCharacter } from '../utils/useFetchCharacter';

type CharacterModalContentProps = {
  id: number | undefined; // Character ID to fetch from the API
};

const CharacterModalContent = ({ id }: CharacterModalContentProps) => {
  const character = useFetchCharacter(id);

  return <div>CharacterModalContent {character?.name}</div>;
};

export default CharacterModalContent;
