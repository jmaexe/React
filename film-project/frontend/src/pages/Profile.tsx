import React from 'react';

const Profile = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">Nome Profilo</h2>
        <div className="card-actions justify-end">
          <p>info</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
