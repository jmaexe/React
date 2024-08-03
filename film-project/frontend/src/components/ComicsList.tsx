import React from 'react';
import { Comics } from './models/Comics';

interface ComicsListProps {
  comics: Comics[];
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
