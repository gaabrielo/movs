import React from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import { AddMovieCard } from 'components/AddMovieCard';
import { Poster } from './Poster';

import { movies } from '../../data/mock';

import { PosterList_query$key } from './__generated__/PosterList_query.graphql';

type PosterListProps = {
  query: PosterList_query$key;
};

const PosterList: React.FC<PosterListProps> = ({ query }) => {
  const data = useFragment(
    graphql`
      fragment PosterList_query on Query {
        movies {
          name
        }
      }
    `,
    query
  );

  console.log('🚀 ~ file: PosterList.tsx ~ line 23 ~ data', data);

  return (
    <div>
      <h1 className="text-2xl leading-9">My favs</h1>

      <div className="flex gap-4 mt-6">
        {movies.map((movie) => (
          <Poster
            key={movie.id}
            imageSrc={movie.cover}
            title={movie.title}
            id={movie.id}
          />
        ))}

        <AddMovieCard />
        <AddMovieCard />
      </div>
    </div>
  );
};

export default PosterList;
