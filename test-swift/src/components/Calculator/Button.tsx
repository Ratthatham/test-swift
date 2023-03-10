import React from 'react';

const getStyleName = (value: string) => {
  const className:{[key: string]: string} = {
    '=': 'equals',
    'x': 'operator',
    '+': 'operator',
    '-': 'operator',
    '/': 'operator',
  }
  return className[value];
}

interface ButtonProps {
  value: string,
  onclick : () => void;
}

const Button: React.FC<ButtonProps> = ({value, onclick}) => {
  return (
    <div className={`${getStyleName(value)} button`} onClick={onclick}>{value}</div>
  )
}

export default Button;
