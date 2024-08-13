import React from 'react';
import { Comic } from './models/Comics';

interface ComicsListProps {
  comics: Comic[];
}

const ComicsList = ({ comics }: ComicsListProps) => {
  return (
    <>
      {comics.map((comic) => (
        <option value={`${comic.title}`} key={comic.id}>
          {comic.title}
        </option>
      ))}
    </>
  );
};

export default ComicsList;
