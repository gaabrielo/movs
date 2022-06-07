import React from 'react';
import { useNavigate } from 'react-router-dom';

import { IconButton } from 'components/IconButton';
import { ArrowLeft } from 'phosphor-react';

interface GoBackHeaderProps {
  children: string;
}

const GoBackHeader: React.FC<GoBackHeaderProps> = (props) => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center gap-6 text-subtitle">
      <IconButton onClick={() => navigate(-1)}>
        <ArrowLeft size="1.5rem" />
      </IconButton>

      <h1 className="text-2xl">{props.children}</h1>
    </header>
  );
};

export { GoBackHeader };
