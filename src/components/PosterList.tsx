import React from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import { AddMovieCard } from 'components/AddMovieCard';
import { Poster } from './Poster';

import { PosterList_query$key } from './__generated__/PosterList_query.graphql';

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
