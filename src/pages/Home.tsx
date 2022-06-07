import React, { Suspense } from 'react';
import { usePreloadedQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import PosterList from '../components/PosterList';
import { Profile } from '../components/Profile';

import { ErrorBoundary } from 'react-error-boundary';

const Home: React.FC = ({ homeQuery }) => {
  const queryRef = usePreloadedQuery(
    graphql`
      query HomeQuery {
        ...PosterList_query
      }
    `,
    homeQuery
  );

  return (
    <ErrorBoundary fallbackRender={({ error }) => <h1>{error.message}</h1>}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className="flex flex-col gap-14">
          <Profile />

          <PosterList queryRef={queryRef} />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Home;
