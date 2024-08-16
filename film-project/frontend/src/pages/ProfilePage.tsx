import React from 'react';
import { useUserContext } from '../hooks/hooks';
import { FcLike } from 'react-icons/fc';

const ProfilePage = () => {
  const { user } = useUserContext();
  console.log(user);
  return (
    <div className="w-full flex justify-center items-center mt-4">
      <div className="card lg:card-side bg-base-200 shadow-xl text-lg ">
        <figure>
          <img src={user?.picture} alt="Album" />
        </figure>
        <div className="card-body gap-5">
          <h2 className="card-title text-2xl">{user?.username}</h2>
          {user && (
            <div>
              {Object.entries(user).map(([key, value]) => {
                if (['email', 'name'].includes(key)) {
                  return (
                    <p className="text-secondary">
                      <span className="text-primary">{key} : </span> {value}
                    </p>
                  );
                }
              })}
            </div>
          )}

          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-primary">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg> */}
                <FcLike size={'48px'} />
              </div>
              <div className="stat-title">Total Likes</div>
              <div className="stat-value text-primary">25.6K</div>
              {/* <div className="stat-desc">21% more than last month</div> */}
            </div>
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-md">
              edit your profile
            </button>
            <label
              htmlFor="delete-box"
              className="btn btn-outline btn-error btn-md"
            >
              Delete your account
            </label>
          </div>
        </div>
      </div>

      <input type="checkbox" id="delete-box" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold text-warning">Are you sure?</h3>
          <p className="py-4">Do you want to delete this account ? </p>
          <div className="modal-action">
            <label htmlFor="delete-box" className="btn btn-primary">
              Back
            </label>
            <label
              htmlFor="delete-box"
              className="btn btn-error"
              onClick={() => console.log('delete account')}
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
