import { Plus } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';

const AddMovieCard: React.FC = () => {
  return (
    <div className="w-32 h-44 bg-transparent rounded-2xl border-2 border-dashed border-subtitle hover:border-title hover:bg-white hover:bg-opacity-5 transition-all duration-300 group">
      <Link to="/add" className="flex w-full h-full">
        <Plus
          size="3rem"
          weight="light"
          className="self-center mx-auto text-subtitle group-hover:text-title transition-all duration-300"
        />
      </Link>
    </div>
  );
};

export { AddMovieCard };
