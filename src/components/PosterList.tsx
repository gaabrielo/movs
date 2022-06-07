import React from 'react';
// import type {HomeTabQuery} from 'HomeTabQuery.graphql';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';

import { AddMovieCard } from 'components/AddMovieCard';
import { Poster } from './Poster';

import { movies } from '../data/mock';

type PosterListProps = {
  queryRef: any;
};

const PosterList: React.FC<PosterListProps> = ({ queryRef }) => {
  // const data = usePreloadedQuery(
  //   graphql`
  //     query PosterList_query {
  //       movies {
  //         name
  //       }
  //     }
  //   `,
  //   queryRef
  // );

  // console.log('🚀 ~ file: PosterList.tsx ~ line 23 ~ data', data);

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

export { PosterList };
