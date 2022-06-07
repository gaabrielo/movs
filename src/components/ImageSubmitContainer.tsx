import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

interface ImageSubmitContainerProps {
  onGetImage: (file: File[]) => void;
}

const ImageSubmitContainer: React.FC<ImageSubmitContainerProps> = ({
  onGetImage,
}) => {
  const [cursorIn, setCursorIn] = useState(false);

  return (
    <Dropzone
      onDragEnter={() => setCursorIn(true)}
      onDragLeave={() => setCursorIn(false)}
      onDrop={(acceptedFiles) => onGetImage(acceptedFiles)}
      // multiple={false}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps()}
          className={`w-full h-40 flex flex-col 
                items-center justify-center bg-transparent 
                rounded-2xl border-2 border-dashed border-subtitle hover:border-title 
                cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-5 ${
                  cursorIn ? 'border-title bg-white bg-opacity-5' : ''
                }`}
        >
          <input {...getInputProps()} />
          <p className="text-xl">Drop image here</p>
          <p className="text-base text-subtitle">or click to upload</p>
        </div>
      )}
    </Dropzone>
  );
};

export { ImageSubmitContainer };
