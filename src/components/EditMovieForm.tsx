import React, { useEffect, useState } from 'react';
import { MovieProps } from '../../data/types';
import { format } from 'date-fns';
import InputMask from 'react-input-mask';
import { Poster } from 'components/Poster';
import { ImageSubmitControl } from 'components/ImageSubmitControl';
import { ImageSubmitContainer } from 'components/ImageSubmitContainer';

interface EditMovieFormProps {
  preloadedData: MovieProps;
}

const EditMovieForm: React.FC<EditMovieFormProps> = ({ preloadedData }) => {
  const [title, setTitle] = useState<string>(preloadedData.title);
  const [watchedDate, setWatchedDate] = useState<string | null>(
    format(new Date(), 'dd/MM/yy')
  );

  const [posterImage, setPosterImage] = useState<File[] | null>();
  const [posterSrc, setPosterSrc] = useState<string | null>(
    preloadedData.cover
  );

  function getFileSrc(file: File) {
    var src = URL.createObjectURL(file);
    return src;
  }

  useEffect(() => {
    if (posterImage) {
      setPosterSrc(getFileSrc(posterImage[0]));
    }
  }, [posterImage]);

  return (
    <form className="flex flex-col gap-7">
      <div>
        <label htmlFor="movieTitle" className="text-xl block mb-2">
          Name of film
        </label>
        <input
          type="text"
          id="movieTitle"
          className="w-full h-12 bg-background-light p-3"
          value={title || ''}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex gap-3 items-center">
        <label htmlFor="watchedIn" className="text-xl block">
          Watched in
        </label>

        <InputMask
          type="text"
          id="watchedIn"
          className="h-12 bg-background-light p-3 w-28"
          mask="99/99/99"
          maskChar={null}
          alwaysShowMask={false}
          value={watchedDate || ''}
          onChange={(e) => setWatchedDate(e.target.value)}
        />
      </div>

      {posterSrc ? (
        <div className="flex gap-3">
          <div className="block">
            <Poster
              imageSrc={posterSrc}
              title="Jaws"
              id="key"
              hasActions={false}
            />
          </div>

          <div className="block w-full mb-0 mt-auto">
            <ImageSubmitControl
              successLabel="Confirm"
              handleConfirmation={() => alert('confirm')}
              handleChangeClick={() => {
                setPosterImage(null);
                setPosterSrc(null);
              }}
              isDisabled={!watchedDate || watchedDate?.length < 8 || !title}
            />
          </div>
        </div>
      ) : (
        <ImageSubmitContainer onGetImage={(file) => setPosterImage(file)} />
      )}
    </form>
  );
};

export { EditMovieForm };
