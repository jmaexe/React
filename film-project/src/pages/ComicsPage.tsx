import React from 'react';
import ComicsCard from '../components/ComicsCard';

const ComicsPage = () => {
  const array = new Array(10);

  return (
    <div className="flex items-center flex-col w-full h-fit ">
      <span className="font-bold text-3xl text-primary my-6">Comics Page</span>
      <div className="container gap-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:gap-x-2 place-items-center">
        <ComicsCard />
        <ComicsCard />
        <ComicsCard />
        <ComicsCard />
        <ComicsCard />
        <ComicsCard />
        <ComicsCard />
      </div>
    </div>
  );
};

export default ComicsPage;
