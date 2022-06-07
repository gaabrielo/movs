import React from 'react';
import { Camera } from 'phosphor-react';

interface ImageSubmitControlProps {
  successLabel: string;
  handleConfirmation: () => void;
  handleChangeClick: () => void;
  isDisabled: boolean;
}

const ImageSubmitControl: React.FC<ImageSubmitControlProps> = ({
  successLabel,
  handleConfirmation,
  handleChangeClick,
  isDisabled,
}) => {
  return (
    <div className="w-full flex gap-3">
      <button
        type="button"
        onClick={handleChangeClick}
        className="flex items-center justify-center border border-subtitle text-subtitle gap-3 w-1/2 h-12 hover:bg-white hover:bg-opacity-5 hover:border-title hover:text-title"
      >
        <Camera size="1.5rem" className="text-title" />
        Change picture
      </button>

      <button
        type="button"
        onClick={handleConfirmation}
        disabled={isDisabled}
        className="flex items-center justify-center text-title bg-success w-1/2 hover:brightness-75 disabled:brightness-75 disabled:cursor-not-allowed"
      >
        {successLabel}
      </button>
    </div>
  );
};

export { ImageSubmitControl };
