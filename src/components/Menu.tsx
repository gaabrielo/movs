import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface ListProps {
  to: string;
  children: string;
}

function LinkBadge(props: ListProps) {
  const { pathname } = useLocation();

  return (
    <li>
      <Link
        to={props.to}
        className={`hover:bg-background-light rounded-lg px-2 py-1 ${
          pathname === props.to ? 'bg-background-light' : ''
        }`}
      >
        {props.children}
      </Link>
    </li>
  );
}

const Menu: React.FC = () => {
  return (
    <nav>
      <ul className="flex gap-4 mb-7">
        <LinkBadge to="/">Favorites</LinkBadge>

        <LinkBadge to="/watchlist">Watchlist</LinkBadge>
      </ul>
    </nav>
  );
};

export { Menu };
