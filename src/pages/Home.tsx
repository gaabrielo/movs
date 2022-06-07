import React, { Suspense } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { PosterList } from '../components/PosterList';
import { Profile } from '../components/Profile';

import { ErrorBoundary } from 'react-error-boundary';

const Home: React.FC = () => {
  // const ref = useLazyLoadQuery(
  //   graphql`
  //     query HomeQuery {
  //       ...PosterList_query
  //     }
  //   `,
  //   {}
  // );
  const ref = null;

  return (
    <ErrorBoundary fallbackRender={({ error }) => <h1>{error.message}</h1>}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className="flex flex-col gap-14">
          <Profile />

          <PosterList queryRef={ref} />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export { Home };