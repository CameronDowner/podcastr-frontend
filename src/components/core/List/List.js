import React from 'react';

export function List({ children }) {
  return (
    <ul>
      {children}
    </ul>
  );
}

export function ListItem({ children }) {
  return (
    <li>{children}</li>
  );
}