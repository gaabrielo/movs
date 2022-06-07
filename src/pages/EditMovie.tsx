import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { GoBackHeader } from 'components/GoBackHeader';
import { EditMovieForm } from 'components/EditMovieForm';

export const movies = [
  {
    id: '1',
    title: "Harry Potter and the Philosopher's Stone",
    cover:
      'https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_.jpg',
  },
  {
    id: '2',
    title: 'Jaws',
    cover:
      'https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/1/513820201013-uau-posters-classico-retro-jaws-turbarao-4.jpg',
  },
];

type MovieProps = {
  id: string;
  title: string;
  cover: string;
};

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
