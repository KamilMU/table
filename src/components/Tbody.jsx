import React from 'react';
import Row from './Row.jsx';

export default function Tbody({ sources }) {
  return (
    <tbody>
      {sources.map((source, index) => (
        <Row key={index} source={source} />
      ))}
    </tbody>
  )
}
