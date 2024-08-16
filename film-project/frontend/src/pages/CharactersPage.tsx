import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { Character } from '../components/models/Character';
import CharactersList from '../components/CharactersList';
import CharacterListFilters from '../components/CharacterListFilters';
import {
  CharacterFilters,
  fetchCharacters,
} from '../components/models/Characters';
import { useQuery } from '@tanstack/react-query';
import Error from '../components/Error';
import CharacterModal from '../components/CharacterModal';

const CharactersPage = () => {
  const [limit, setLimit] = useState<CharacterFilters['limit']>(10);
  const [name, setName] = useState<CharacterFilters['name']>('');

  const [modal, setModal] = useState<number | undefined>();

  const { data, isFetching, error } = useQuery({
    queryKey: ['characters', { limit, name }],
    queryFn: () => fetchCharacters({ limit, name }),
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const character = useMemo(() => {
    console.log('memo');
    return data?.find((c) => c.id === modal);
  }, [modal, data]);

  console.log(modal, data, new Date().toLocaleTimeString());

  return (
    <div className="flex items-center justify-center flex-col w-full h-fit ">
      <span className="font-bold text-3xl text-primary my-6">
        Characters Page
      </span>
      <CharacterListFilters
        onChange={(filters: CharacterFilters) => {
          setLimit(filters.limit);
          setName(filters.name);
        }}
      />
      {error && <Error error={error} />}
      {data?.length == 0 && <p>Nessun Personaggio presente</p>}
      {data && (
        <>
          <CharactersList characters={data} setModal={setModal} />
          <CharacterModal character={character} />
        </>
      )}
      {isFetching && <p>Loading...</p>}
    </div>
  );
};

export default CharactersPage;
