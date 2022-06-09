import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Trash, PencilSimpleLine } from 'phosphor-react';
import { IconButton } from 'components/IconButton';

import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import environment from '../services/Environment';

interface PosterProps {
  imageSrc: string;
  title: string;
  id: string;
  hasActions?: boolean;
}

const Poster: React.FC<PosterProps> = ({
  imageSrc,
  title,
  id,
  hasActions = true,
}) => {
  const navigate = useNavigate();

  const mutation = graphql`
    mutation PosterMutation($input: MovieId!) {
      deleteMovie(movieId: $input)
    }
  `;

  const variables = {
    input: { _id: id },
  };

  return (
    <div className="w-32 h-44 rounded-2xl relative group">
      {hasActions ? (
        <div className="absolute w-full h-full bg-opacity-0 bg-black hover:bg-opacity-50 hidden itens-center justify-center gap-4 group-hover:flex transition-all duration-300">
          <IconButton
            onClick={() =>
              commitMutation(environment, {
                mutation,
                variables,
                onCompleted: (response, errors) => {
                  document.location.reload();
                },
                onError: (err) => console.error(err),
              })
            }
          >
            <Trash size="2rem" />
          </IconButton>

          <IconButton onClick={() => navigate(`edit/${id}`)}>
            <PencilSimpleLine size="2rem" />
          </IconButton>
        </div>
      ) : null}

      <img
        src={imageSrc}
        alt={title}
        className="rounded-2xl w-full h-full object-cover"
      />
    </div>
  );
};

export { Poster };
