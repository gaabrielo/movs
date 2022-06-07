import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  onClick: () => void;
}

function IconButton(props: LayoutProps) {
  const { children, onClick } = props;

  return (
    <button
      className="rounded-lg hover:bg-white hover:bg-opacity-20 h-min self-center p-0.5 transition-all duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export { IconButton };
