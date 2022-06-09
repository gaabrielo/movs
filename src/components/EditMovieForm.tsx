import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { Poster } from 'components/Poster';
import { ImageSubmitControl } from 'components/ImageSubmitControl';
import { ImageSubmitContainer } from 'components/ImageSubmitContainer';
import { ArrowRight } from 'phosphor-react';

import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import environment from '../services/Environment';
import { useNavigate } from 'react-router-dom';

type MovieProps = {
  _id: string;
  name: string;
  cover: string;
  description: string;
};

interface EditMovieFormProps {
  preloaded: MovieProps;
}

type FormDataProps = {
  title: string | null;
  watchedDate: string;
  imageUrl: string;
};

const EditMovieForm: React.FC<EditMovieFormProps> = ({ preloaded }) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState<FormDataProps>({
    title: preloaded?.name,
    watchedDate: preloaded.description,
    imageUrl: preloaded.cover,
  });
  const [isPreview, setIsPreview] = useState(false);

  function handleChange(name: string, value: string | null) {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const mutation = graphql`
    mutation EditMovieFormMutation(
      $movieId: MovieId!
      $input: UpdateMovieProps!
    ) {
      updateMovie(movieId: $movieId, movieInput: $input) {
        _id
      }
    }
  `;

  const variables = {
    movieId: { _id: preloaded._id },
    input: {
      name: formData.title,
      description: formData.watchedDate,
      cover: formData.imageUrl,
    },
  };

  return (
    <form className="flex flex-col gap-7">
      <div>
        <label htmlFor="movieTitle" className="text-xl block mb-2">
          Name of film
        </label>
        <input
          type="text"
          name="title"
          id="movieTitle"
          className="w-full h-12 bg-background-light p-3"
          value={formData.title || ''}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>

      <div className="flex gap-3 items-center">
        <label htmlFor="watchedIn" className="text-xl block">
          Watched in
        </label>

        <InputMask
          type="text"
          name="watchedDate"
          id="watchedIn"
          className="h-12 bg-background-light p-3 w-28"
          mask="99/99/99"
          maskChar={null}
          alwaysShowMask={false}
          value={formData.watchedDate || ''}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>

      {isPreview ? (
        <div className="flex gap-3">
          <div className="block">
            <Poster
              imageSrc={formData.imageUrl}
              title="Jaws"
              id="key"
              hasActions={false}
            />
          </div>

          <div className="block w-full mb-0 mt-auto">
            <ImageSubmitControl
              successLabel="Confirm"
              handleConfirmation={() =>
                commitMutation(environment, {
                  mutation,
                  variables,
                  onCompleted: (response, errors) => {
                    navigate('../', { replace: true });
                  },
                  onError: (err) => console.error(err),
                })
              }
              handleChangeClick={() => {
                handleChange('watchedDate', null);
              }}
              isDisabled={
                !formData.watchedDate ||
                formData.watchedDate?.length < 8 ||
                !formData.title
              }
            />
          </div>
        </div>
      ) : (
        // <ImageSubmitContainer onGetImage={(file) => setPosterImage(file)} />
        <>
          <div>
            <label htmlFor="movieTitle" className="text-xl block mb-2">
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              id="movieTitle"
              className="w-full h-12 bg-background-light p-3"
              value={formData.imageUrl || ''}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={() => setIsPreview(true)}
            disabled={!formData.imageUrl}
            className="flex items-center gap-2 px-3 h-12 justify-center text-title bg-success w-min hover:brightness-75 disabled:brightness-75 disabled:cursor-not-allowed mr-0 ml-auto"
          >
            Preview
            <ArrowRight weight="bold" />
          </button>
        </>
      )}
    </form>
  );
};

export { EditMovieForm };
