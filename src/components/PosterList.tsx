import React from 'react';
// import type {HomeTabQuery} from 'HomeTabQuery.graphql';
import {
  PreloadedQuery,
  usePreloadedQuery,
  QueryRenderer,
  graphql,
} from 'react-relay';
// import graphql from 'babel-plugin-relay/macro';

import { AddMovieCard } from 'components/AddMovieCard';
import { Poster } from './Poster';

import Environment from '../services/Environment';

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
  queryRef?: any;
  // query?: any;
};

const PosterList: React.FC<PosterListProps> = ({ queryRef }) => {
  console.log('🚀 ~ file: PosterList.tsx ~ line 37 ~ queryRef', queryRef);
  // const data = usePreloadedQuery(
  //   graphql`
  //     query PosterListQuery {
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

const PosterListQR = () => {
  return (
    <QueryRenderer
      environment={Environment}
      query={graphql`
        query PosterListQuery {
          movies {
            _id
            name
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        console.log('qr: ', error, props);
        if (error) {
          return <span>{error.toString()}</span>;
        }

        if (props) {
          return <PosterList queryRef={props} />;
        }

        return <span>loading</span>;
      }}
    />
  );
};

export default PosterList;
