import React from 'react';
import Row from './Row.jsx';
import { sum } from '../utils/index';

export default function Tbody({ sources }) {
  const _sum = sum(sources);

  return (
    <tbody>
      <tr className="sum">
        <td>Итого</td>
        <td>{_sum('shows')}</td>
        <td>{_sum('clicks')}</td>
        <td>{_sum('session')}</td>
        <td>{_sum('ctr')}</td>
        <td>{_sum('clickPrice')}</td>
        <td>{_sum('expenses')}</td>
        <td>{_sum('salesAmount').toFixed(2)}</td>
        <td>{_sum('salesCpa')}</td>
        <td>{_sum('salesProceeds')}</td>
        <td>{_sum('targetAmount')}</td>
        <td>{_sum('targetCpa')}</td>
        <td>{_sum('targetCr')}</td>
      </tr>

      {sources.map((source, index) => (
        <Row key={index} source={source} />
      ))}
    </tbody>
  )
}
