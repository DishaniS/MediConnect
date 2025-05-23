// src/components/HelloWorld.tsx
import React from 'react';

type Props = {
  name: string;
};

const HelloWorld: React.FC<Props> = ({ name }) => {
  return <h1>Hello, {name}! Welcome to MediConnect!</h1>;
};

export default HelloWorld;
