import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

function Container(props: LayoutProps) {
  return (
    <div className="px-4 min-h-full">
      <div className="max-w-lg mx-auto my-0 mt-[10%]">{props.children}</div>
    </div>
  );
}

export { Container };
