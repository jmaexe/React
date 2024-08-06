import React from 'react';
import { Character } from './models/Chararcter';
import { Card } from './models/Characters';
type ComicsListProps = {
  characters: Character[];
};
type CardProps = {
  characters: Card[];
};

const CharactersList = ({ characters }: ComicsListProps) => {
  return (
    // grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:gap-x-2
    <div className=" gap-4 flex flex-wrap justify-center items-center gap-y-6">
      {characters.map((character) => (
        <>
          <div className="card card-compact bg-base-100 w-full max-w-56 shadow-xl ">
            <figure>
              <img
                className="max-w-md w-full sm:max-w-sm"
                // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">{character.name} </h2>
              <p className="italic text-secondary">{character.id}</p>

              <div className="card-actions justify-end">
                {/* <a className="btn btn-primary" href={character.resourceURI}>
                  More info
                </a> */}
                <label
                  htmlFor={`my_modal_${character.id}`}
                  className="btn btn-primary"
                >
                  More info
                </label>
              </div>
            </div>
          </div>
          <input
            type="checkbox"
            id={`my_modal_${character.id}`}
            className="modal-toggle"
          />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <h3 className="text-lg font-bold mb-2 text-primary">More info</h3>
              <p className="py-4 text-secondary">
                Last modified: {character.modified}
              </p>
              <p className="py-4">{character.description}</p>
              <div className="collapse bg-base-200 ">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium">
                  Stories
                </div>
                <div className="collapse-content">
                  {character.stories?.items?.map((item) => (
                    <>
                      <br />
                      <a
                        className="text-secondary font-medium underline"
                        href={`${item.resourceURI}`}
                      >
                        {item.name} ({item.type})
                      </a>
                    </>
                  ))}
                </div>
              </div>
              <div className="divider"></div>
              <div className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium">Comics</div>
                <div className="collapse-content">
                  {character.comics?.items?.map((comic) => (
                    <>
                      <br />
                      <a
                        className="text-secondary font-medium underline"
                        href={`${comic.resourceURI}`}
                      >
                        {comic.name}
                      </a>
                    </>
                  ))}
                </div>
              </div>
              <div className="divider"></div>
              {character.events?.items?.length != 0 && (
                <div className="collapse bg-base-200">
                  <input type="checkbox" />
                  <div className="collapse-title text-lg font-medium">
                    Events
                  </div>
                  <div className="collapse-content">
                    {character.events?.items?.map((event) => (
                      <>
                        {console.log(character.events?.items)}
                        <br />
                        <a
                          className="text-secondary font-medium underline"
                          href={`${event.resourceURI}`}
                        >
                          {event.name}
                        </a>
                      </>
                    ))}
                  </div>
                </div>
              )}
              <div className="modal-action">
                <label htmlFor={`my_modal_${character.id}`} className="btn">
                  Close!
                </label>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default CharactersList;
