import React, { useEffect, useState } from 'react';
import { CharacterFilters } from './models/Characters';

type CharacterListFiltersProps = {
  onChange: (filters: CharacterFilters) => void;
};

const CharacterListFilters = ({ onChange }: CharacterListFiltersProps) => {
  const [nameFilter, setNameFilter] = useState<CharacterFilters['name']>();
  const [ageFilter, setAgeFilter] = useState<CharacterFilters['age']>();

  useEffect(() => {
    onChange({ name: nameFilter, age: ageFilter });
  }, [nameFilter, ageFilter]);
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
  return (
    <div className="w-full px-4 gap-4 mb-5 pb-5 flex justify-center">
      <select
        className="select select-info w-full max-w-xs"
        defaultValue={'Select name'}
        onChange={(e) => {
          setNameFilter(e.target.value as CharacterFilters['name']);
        }}
      >
        <option disabled>Select name</option>
        {/* fetch all series 
          <option>...</option> */}
        {names.map((name) => (
          <option value={name} key={name}>
            {' '}
            {name}{' '}
          </option>
        ))}
      </select>
      <select
        className="select select-info w-full max-w-xs"
        onChange={
          (e) => {
            setAgeFilter(+e.target.value as CharacterFilters['age']);
          }
          // setAgeFilter(+target.value)
        }
        defaultValue={'Select age'}
      >
        <option disabled>Select age</option>
        {numbers.map((age) => (
          <option value={age} key={age}>
            {age}
          </option>
        ))}
        {/* fetch all stories 
          <option>...</option> */}
      </select>
    </div>
  );
};
export default CharacterListFilters;
