import React, { useMemo, useState } from 'react';
import CharactersList from '../components/CharactersList';
import CharacterListFilters from '../components/CharacterListFilters';
import { CharacterFilters } from '../models/Characters';
import { useQuery } from '@tanstack/react-query';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { fetchCharacters } from '../api/apiCharacters';
import ModalLayout from '../components/ModalLayout';
import { Character } from '../models/Character';
import ModalContent from '../components/ModalContent';
import ModalAction from '../components/ModalAction';

const CharactersPage = () => {
  const [limit, setLimit] = useState<CharacterFilters['limit']>(10);
  const [name, setName] = useState<CharacterFilters['name']>('');
  const [characterId, setCharacterId] = useState<number | undefined>();
  const [showModal, setShowModal] = useState<boolean>(false);

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
    return data?.find((c) => c.id === characterId);
  }, [characterId, data]);

  const handleClickCard = (id: number) => {
    setShowModal(!showModal);
    setCharacterId(id);
  };

  console.log(characterId, data, new Date().toLocaleTimeString());
  return (
    <div className="flex items-center justify-center flex-col w-full h-fit ">
      <h2 className="font-bold text-3xl text-primary my-6">Characters Page</h2>
      <CharacterListFilters
        onChange={(filters: CharacterFilters) => {
          setLimit(filters.limit);
          setName(filters.name);
        }}
      />
      {error && <Error error={error} />}
      {data && (
        <>
          <CharactersList
            characters={data}
            handleClick={() => handleClickCard}
          />
          <ModalLayout id="modal" showModal={showModal}>
            <ModalContent data={data} type={'character'} />
            <ModalAction />
          </ModalLayout>
        </>
      )}
      {isFetching && <Loading />}
    </div>
  );
};

export default CharactersPage;
