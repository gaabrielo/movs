import React, { Suspense } from 'react';
import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import PosterList from '../components/PosterList';
import { Profile } from '../components/Profile';

import { ErrorBoundary } from 'react-error-boundary';

import { HomeQuery } from './__generated__/HomeQuery.graphql';

const Home: React.FC = () => {
  const query = useLazyLoadQuery<HomeQuery>(
    graphql`
      query HomeQuery {
        ...PosterList_query
      }
    `,
    {}
  );

  return (
    <ErrorBoundary fallbackRender={({ error }) => <h1>{error.message}</h1>}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className="flex flex-col gap-14">
          <Profile />

          <PosterList query={query} />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Home;
