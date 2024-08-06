import React, { useState } from 'react';
import { Character } from './models/Chararcter';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
type ComicsListProps = {
  characters: Character[];
};

const CharactersList = ({ characters }: ComicsListProps) => {
  const [likeChecked, setLikeChecked] = useState<boolean>(true);

  return (
    // grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:gap-x-2
    <div className=" gap-4 flex flex-wrap justify-center items-center gap-y-6">
      {characters.map((character) => (
        <>
          <div className="card card-compact bg-base-100 w-full max-w-56 max-h-56 2xl:max-w-72 2xl:max-h-72 shadow-xl image-full">
            <figure>
              <img
                className="max-w-xs w-full sm:max-w-sm "
                src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
              />
            </figure>
            <div className="card-body items-center text-center flex-col-reverse">
              <div className="flex flex-wrap gap-5 justify-between">
                {' '}
                <label className="swap text-3xl">
                  <input type="checkbox" />
                  <div className="swap-on">
                    <FcLike />
                  </div>
                  <div className="swap-off">
                    <FcLikePlaceholder />
                  </div>
                </label>
                <label
                  htmlFor={`my_modal_${character.id}`}
                  className="btn btn-primary"
                >
                  More info
                </label>
              </div>
              <h2 className="card-title text-primary text-lg">
                {character.name}{' '}
              </h2>
              {/* <p className="italic text-secondary">{character.id}</p> */}

              <div className="card-actions justify-around items-center">
                {/* <a className="btn btn-primary" href={character.resourceURI}>
                  More info
                </a> */}
              </div>
            </div>
          </div>
          <input
            type="checkbox"
            id={`my_modal_${character.id}`}
            className="modal-toggle"
          />

          {/* Modal  */}
          <div className="modal" role="dialog">
            <div className="modal-box 2xl:w-3/5 md:w-1/2 xl:w-4/6 w-3/5  max-w-full overflow-visible">
              <div className="card xl:card-side bg-base-100 ">
                <figure>
                  <img
                    src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
                  />
                </figure>
                <div className="card-body basis-1/2 justify-around">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      {' '}
                      <label className="swap text-3xl">
                        <input type="checkbox" checked={likeChecked} />
                        <div className="swap-on">
                          <FcLike />
                        </div>
                        <div className="swap-off">
                          <FcLikePlaceholder />
                        </div>
                      </label>
                      <h3 className="text-lg font-bold text-primary">
                        About {character.name}
                      </h3>
                    </div>
                    <p className="py-4 text-secondary grow-0">
                      Last modified: {character.modified}
                    </p>
                    {character.description && (
                      <p className="py-4 grow-0">{character.description}</p>
                    )}
                  </div>
                  <p className="text-justify">
                    {character.stories?.items?.map((item) => (
                      <>
                        <a
                          className="text-secondary font-medium underline"
                          href={`${item.resourceURI}`}
                        >
                          {item.name} ({item.type})
                        </a>
                        &nbsp;
                      </>
                    ))}
                  </p>
                  <div className="dropdown dropdown-right">
                    <div tabIndex={0} role="button" className="btn m-1 w-full">
                      Click
                    </div>
                    <div
                      tabIndex={0}
                      className="dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow overflow-visible"
                    >
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
                  {/* <div className="collapse bg-base-200 ">
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
                  <div className="collapse bg-base-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-medium">
                      Comics
                    </div>
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
                  </div> */}
                  {/* {character.events?.items?.length != 0 && (
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
                  )} */}
                  <div className="modal-action">
                    <label
                      htmlFor={`my_modal_${character.id}`}
                      className="btn btn-primary "
                    >
                      Close!
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <label
              className="modal-backdrop"
              htmlFor={`my_modal_${character.id}`}
            ></label>
          </div>
        </>
      ))}
    </div>
  );
};

export default CharactersList;
