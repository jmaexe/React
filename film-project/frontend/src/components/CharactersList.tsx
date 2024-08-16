import React, { memo, useMemo, useRef, useState } from 'react';
import { Character } from './models/Character';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import CharacterModal from './CharacterModal';

type CharactersListProps = {
  characters: Character[];
  setModal: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const CharactersList = ({ characters, setModal }: CharactersListProps) => {
  const [likeChecked, setLikeChecked] = useState<boolean>(true);
  console.log('rendered characters');
  // const [modal, setModal] = useState<number | undefined>(undefined);
  // const modalRef = useRef<HTMLInputElement | null>(null);

  // const character = useMemo(() => {
  //   console.log('memo');
  //   return characters.find((c) => c.id === modal);
  // }, [modal, characters]);
  // console.log(character, new Date().toLocaleTimeString());
  // {character.events?.items?.map((event) => (
  //   <>
  //     {console.log(character.events?.items)}
  //     <br />
  //     <a
  //       className="text-secondary font-medium underline"
  //       href={`${event.resourceURI}`}
  //     >
  //       {event.name}
  //     </a>
  //   </>
  // ))}
  // {character.stories?.items?.map((item) => (
  //   <>
  //     <br />
  //     <a
  //       className="text-secondary font-medium underline"
  //       href={`${item.resourceURI}`}
  //     >
  //       {item.name} ({item.type})
  //     </a>
  //   </>
  // ))}
  // {character.comics?.items?.map((comic) => (
  //   <>
  //     <br />
  //     <a
  //       className="text-secondary font-medium underline"
  //       href={`${comic.resourceURI}`}
  //     >
  //       {comic.name}
  //     </a>
  //   </>
  // ))}
  return (
    <div className=" gap-4 flex flex-wrap justify-center items-center gap-y-6">
      {characters.map((character) => (
        <div
          key={character.name}
          className="card card-compact bg-base-100 w-full max-w-56 max-h-56 2xl:max-w-72 2xl:max-h-72 shadow-xl image-full"
        >
          <figure>
            <img
              className="max-w-md w-full sm:max-w-sm"
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
              {/* <button
                  className="btn btn-primary"
                  onClick={() => {
                    modalRef.current?.click();
                    setModal(character.id);
                  }}
                >
                  More info
                </button> */}
              <button
                className="btn"
                onClick={() => {
                  setModal(character.id);
                  (
                    document.getElementById('modal') as HTMLDialogElement
                  ).showModal();
                }}
              >
                more info
              </button>
            </div>
            <h2 className="card-title text-primary text-lg">
              {character.name}{' '}
            </h2>
            {/* <p className="italic text-secondary">{character.id}</p> */}

            <div className="card-actions justify-around items-center"></div>
          </div>
        </div>
      ))}
      {/* <input
        ref={modalRef}
        type="checkbox"
        id={`my_modal`}
        className="modal-toggle"
        onClick={() => {
          modalRef.current?.click();
        }}
      /> */}
      {/* <div className="modal" role="dialog">
        <div className="modal-box 2xl:w-3/5 md:w-1/2 xl:w-4/6 w-3/5  max-w-full overflow-y-scroll">
          <div className="card xl:card-side bg-base-100 ">
            <figure className="max-w-lg">
              <img
                src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
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
                    About {character?.name}
                  </h3>
                </div>
                <p className="py-4 text-secondary grow-0">
                  Last modified: {character?.modified}
                </p>
                {character?.description && (
                  <p className="py-4 grow-0">{character?.description}</p>
                )}
              </div>
             
            </div>
            <div className="modal-action">
              <button
                className="btn btn-primary "
                onClick={() => {
                  setModal(undefined);
                  modalRef.current?.click();
                }}
              >
                Close!
              </button>
            </div>
          </div>
        </div>
      </div>
      <label className="modal-backdrop" htmlFor={`my_modal_${modal}`}></label> */}
    </div>
  );
};

export default memo(CharactersList);
