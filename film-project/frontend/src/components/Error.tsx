import React from 'react';
type ErrorProps = {
  error: Error;
};

const Error = ({ error }: ErrorProps) => {
  return (
    <div>
      <span>{error.message}</span>
    </div>
  );
};

export default Error;
