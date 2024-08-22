import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api/apiCharacters';

export const useFetchCharacter = (id: number | undefined) => {
  const { data: characters } = useQuery({
    queryKey: ['characters'],
    queryFn: () => fetchCharacters(),
  });
  return characters?.find((c) => c.id === id);
};
