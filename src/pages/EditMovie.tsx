import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { GoBackHeader } from 'components/GoBackHeader';
import { EditMovieForm } from 'components/EditMovieForm';

import { useLazyLoadQuery } from 'react-relay';
import { EditMovieQuery } from './__generated__/EditMovieQuery.graphql';
import graphql from 'babel-plugin-relay/macro';

interface EditMovieProps {
  movieId: string;
}

const EditMovie: React.FC<EditMovieProps> = ({ movieId }) => {
  const data = useLazyLoadQuery<EditMovieQuery>(
    graphql`
      query EditMovieQuery($input: MovieId!) {
        getMovieById(movieId: $input) {
          _id
          name
          description
          cover
        }
      }
    `,
    { input: { _id: movieId } }
  );

  if (!data) return <h1>Loading...</h1>;
  return (
    <div className="flex flex-col gap-14">
      <GoBackHeader>Edit favorite</GoBackHeader>

      {data?.getMovieById && <EditMovieForm preloaded={data.getMovieById} />}
    </div>
  );
};

export default function EditMovieWrapper() {
  let { id } = useParams();

  if (!id) return <h1>Loading...</h1>;
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <EditMovie movieId={id} />
    </Suspense>
  );
}
