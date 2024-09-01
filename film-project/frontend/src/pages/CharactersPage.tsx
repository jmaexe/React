import { useState } from 'react';
import CharactersList from '../components/CharactersList';
import CharacterListFilters from '../components/CharacterListFilters';
import { CharacterFilters } from '../models/Characters';
import { useQuery } from '@tanstack/react-query';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { fetchCharacters } from '../api/apiCharacters';
import { useUserContext } from '../hooks/useUserContext';

const CharactersPage = () => {
  const [limit, setLimit] = useState<CharacterFilters['limit']>(10);
  const [name, setName] = useState<CharacterFilters['name']>('');
  const { data, isFetching, error } = useQuery({
    queryKey: ['characters', { limit, name }],
    queryFn: () => fetchCharacters({ limit, name }),
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const { user } = useUserContext();
  return (
    <div className="flex items-center justify-center flex-col w-full h-fit ">
      <h2 className="font-bold text-3xl text-primary my-6">
        Characters Page {JSON.stringify(user?.likes?.join(','))}
      </h2>
      <CharacterListFilters
        onChange={(filters: CharacterFilters) => {
          setLimit(filters.limit);
          setName(filters.name);
        }}
      />
      {error && <Error error={error} />}
      {data && <CharactersList characters={data} />}
      {isFetching && <Loading />}
    </div>
  );
};

export default CharactersPage;
