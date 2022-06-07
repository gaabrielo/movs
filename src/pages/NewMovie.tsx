import React from 'react';

import { AddMovieForm } from 'components/AddMovieForm';
import { GoBackHeader } from 'components/GoBackHeader';

const NewMovie: React.FC = () => {
  return (
    <div className="flex flex-col gap-14">
      <GoBackHeader>Add a favorite</GoBackHeader>

      <AddMovieForm />
    </div>
  );
};

export { NewMovie };
