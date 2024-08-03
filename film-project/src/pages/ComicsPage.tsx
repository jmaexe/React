import React, { ChangeEvent, useEffect, useState } from 'react';
import { Character } from '../components/models/Chararcter';
import CharactersList from '../components/CharactersList';
import CharacterListFilters from '../components/CharacterListFilters';
import {
  Card,
  CharacterFilters,
  fetchCharacters,
} from '../components/models/Characters';
import { useQuery } from '@tanstack/react-query';

const ComicsPage = () => {
  // const [age, setAge] = useState<CharacterFilters['age']>();
  // const [name, setName] = useState<CharacterFilters['name']>();
  const [limit, setLimit] = useState<CharacterFilters['limit']>(10);
  // const { data, isFetching } = useQuery({
  //   queryKey: ['characters', { limit }],
  //   queryFn: () => fetchCharacters({ limit }),
  //   refetchOnWindowFocus: false,
  // });

  return (
    <div className="flex items-center flex-col w-full h-fit ">
      <span className="font-bold text-3xl text-primary my-6">Comics Page</span>
      <CharacterListFilters
        onChange={(filters: CharacterFilters) => {
          // setAge(filters?.age);
          // setName(filters?.name);
          setLimit(filters.limit);
        }}
      />
      {/* {data?.length == 0 && <p>Nessun Personaggio presente</p>} */}
      {/* {data && <CharactersList characters={data} />} */}
      {/* {isFetching && <p>Loading...</p>} */}
    </div>
  );
};

export default ComicsPage;
