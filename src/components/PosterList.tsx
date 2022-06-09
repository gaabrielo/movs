import React from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import { AddMovieCard } from 'components/AddMovieCard';
import { Poster } from './Poster';

import { PosterList_query$key } from './__generated__/PosterList_query.graphql';

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

type PosterListProps = {
  query: PosterList_query$key;
};

const PosterList: React.FC<PosterListProps> = ({ query }) => {
  const data = useFragment(
    graphql`
      fragment PosterList_query on Query {
        movies {
          _id
          name
          cover
        }
      }
    `,
    query
  );

  return (
    <div>
      <h1 className="text-2xl leading-9">My favs</h1>

      <div className="flex gap-4 mt-6">
        {data?.movies.map((movie) => (
          <Poster
            key={movie._id}
            imageSrc={movie.cover}
            title={movie.name}
            id={movie._id}
          />
        ))}

        {[...Array(4 - data?.movies.length)].map((_, key) => (
          <AddMovieCard key={key} />
        ))}
      </div>
    </div>
  );
};

export default PosterList;
