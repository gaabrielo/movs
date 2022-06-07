import React from 'react';
// import type {HomeTabQuery} from 'HomeTabQuery.graphql';
import { PreloadedQuery, usePreloadedQuery, QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import { AddMovieCard } from 'components/AddMovieCard';
import { Poster } from './Poster';

import { movies } from '../data/mock';

import Environment from '../services/Environment';

type PosterListProps = {
  queryRef: any;
  // query?: any;
};

const PosterList: React.FC<PosterListProps> = ({ queryRef }) => {
  const data = usePreloadedQuery(
    graphql`
      query PosterList_query {
        movies {
          name
        }
      }
    `,
    queryRef
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

// const PosterListQR = () => {
//   return (
//     <QueryRenderer
//       environment={Environment}
//       query={graphql`
//         query PosterListQuery {
//           movies {
//             _id
//             name
//           }
//         }
//       `}
//       variables={{}}
//       render={({ error, props }) => {
//         console.log('qr: ', error, props);
//         if (error) {
//           return <span>{error.toString()}</span>;
//         }

//         if (props) {
//           return <PosterList query={props} />;
//         }

//         return <span>loading</span>;
//       }}
//     />
//   );
// };

export default PosterList;
