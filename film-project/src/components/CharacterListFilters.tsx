import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CharacterFilters, fetchComics } from './models/Characters';
import { useQuery } from '@tanstack/react-query';
import { Comics } from './models/Comics';
import ComicsList from './ComicsList';

type CharacterListFiltersProps = {
  onChange: (filters: CharacterFilters) => void;
};

const CharacterListFilters = ({ onChange }: CharacterListFiltersProps) => {
  // const [nameFilter, setNameFilter] = useState<CharacterFilters['name']>();
  // const [ageFilter, setAgeFilter] = useState<CharacterFilters['age']>();
  const [limit, setLimit] = useState<CharacterFilters['limit']>(10);
  const [comics, setComics] = useState<CharacterFilters['comics']>('');

  const selectRefName = useRef<HTMLSelectElement | null>(null);
  const selectRefAge = useRef<HTMLSelectElement | null>(null);

  const { data, isFetching } = useQuery({
    queryKey: ['comics'],
    queryFn: () => fetchComics(),
    refetchOnWindowFocus: false,
  });

  // const comics = useMemo(() => fetchComics,[]);
  useEffect(() => {
    onChange({ limit });
  }, [limit]);
  // useEffect(() => {
  //   onChange({ name: nameFilter, age: ageFilter });
  // }, [nameFilter, ageFilter]);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const names = [
    'Luca',
    'Giulia',
    'Marco',
    'Sara',
    'Francesco',
    'Anna',
    'Alessandro',
    'Martina',
    'Matteo',
    'Elena',
  ];

  const resetNameFilter = () => {
    if (selectRefName.current) selectRefName.current.value = 'Select name';
  };

  const resetAgeFilter = () => {
    if (selectRefAge.current) selectRefAge.current.value = 'Select age';
  };

  return (
    <div className="w-full px-4 gap-5 mb-5 pb-5 flex justify-center">
      <div className="flex items-center gap-2">
        <select
          ref={selectRefName}
          className="select select-info select-sm w-full max-w-xs"
          defaultValue={'Select limit'}
          onChange={(e) => {
            // setNameFilter(e.target.value as CharacterFilters['name']);
            setLimit(+e.target.value as CharacterFilters['limit']);
          }}
        >
          <option disabled defaultValue={'Select limit'}>
            Select Limit
          </option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        {
          // nameFilter
          limit && (
            <button
              className="badge badge-primary"
              onClick={() => {
                // setNameFilter(undefined);
                setLimit(10);
                // resetNameFilter();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-4 w-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          )
        }
      </div>
      <div className="flex items-center gap-2">
        <select
          className="select select-info select-sm w-full max-w-xs"
          ref={selectRefAge}
          onChange={(e) => {
            setComics(e.target.value as CharacterFilters['comics']);
          }}
          defaultValue={'Select comic'}
        >
          <option disabled value={'Select comic'}>
            Select Comic
          </option>
          {data && <ComicsList comics={data} />}
          {isFetching && <option>sta caricando i comics</option>}
        </select>
        <button className="badge badge-primary" onClick={() => {}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-4 w-4 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default CharacterListFilters;
