import React, { ChangeEvent, useState } from 'react';
import { Character } from '../components/models/Chararcter';
import CharactersList from '../components/models/CharactersList';

type CharacterCardProps = {
  data: Character;
};

const ComicsPage = () => {
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

  const [people, setPeople] = useState<Character[]>([
    { name: 'Luca', age: 2 },
    { name: 'Giulia', age: 3 },
    { name: 'Marco', age: 2 },
    { name: 'Sara', age: 2 },
    { name: 'Francesco', age: 5 },
    { name: 'Anna', age: 1 },
    { name: 'Alessandro', age: 1 },
    { name: 'Martina', age: 4 },
    { name: 'Matteo', age: 3 },
    { name: 'Elena', age: 5 },
  ]);

  const [nameFilter, setNameFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState(0);

  // useEffect(() => {
  //   setPeople((people) =>
  //     people.filter((person: Character) => person.name === nameFilter)
  //   );
  // }, [nameFilter]);

  // useEffect(() => {
  //   setPeople((people) =>
  //     people.filter((person: Character) => person.name === nameFilter)
  //   );
  // }, [ageFilter]);

  return (
    <div className="flex items-center flex-col w-full h-fit ">
      <span className="font-bold text-3xl text-primary my-6">
        Comics Page {nameFilter} {ageFilter}
      </span>
      <div className="w-full h-fit px-4 flex gap-4 mb-5 pb-5">
        <select
          className="select select-info w-full max-w-xs"
          defaultValue={'Select name'}
          onChange={({ target }: ChangeEvent<HTMLSelectElement>) => {
            setNameFilter(target.value);
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
            ({ target }: ChangeEvent<HTMLSelectElement>) => {
              setAgeFilter(+target.value);
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

      <CharactersList characters={data} />
    </div>
  );
};

export default ComicsPage;
