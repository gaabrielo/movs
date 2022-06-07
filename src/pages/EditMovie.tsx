import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { GoBackHeader } from 'components/GoBackHeader';
import { EditMovieForm } from 'components/EditMovieForm';

import { movies } from '../../data/mock';
import { MovieProps } from '../../data/types';

const EditMovie: React.FC = () => {
  let { id } = useParams();

  const [currentMovie, setCurrentMovie] = useState<MovieProps>();

  useEffect(() => {
    setCurrentMovie(movies.find((movie) => movie.id === id));
  }, [id]);

  return (
    <div className="flex flex-col gap-14">
      <GoBackHeader>Edit favorite</GoBackHeader>

      {currentMovie && <EditMovieForm preloadedData={currentMovie} />}
    </div>
  );
};

export { EditMovie };
