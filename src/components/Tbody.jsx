import React from 'react';
import Row from './Row.jsx';
import { sum } from '../utils/index';

export default function Tbody({ sources }) {
  const _sum = sum(sources);

  return (
    <tbody>
      <tr className="sum">
        <td><strong>Итого</strong></td>
        <td className="indicators">{_sum('shows')}</td>
        <td className="indicators">{_sum('clicks')}</td>
        <td className="indicators">{_sum('session')}</td>
        <td className="indicators">{_sum('ctr')}</td>
        <td className="indicators">{_sum('clickPrice')}</td>
        <td className="indicators">{_sum('expenses')}</td>
        <td className="indicators">{_sum('salesAmount')}</td>
        <td className="indicators">{_sum('salesCpa')}</td>
        <td className="indicators">{_sum('salesProceeds')}</td>
        <td className="indicators">{_sum('targetAmount')}</td>
        <td className="indicators">{_sum('targetCpa')}</td>
        <td className="indicators">{_sum('targetCr')}</td>
      </tr>

      {sources.map((source, index) => (
        <Row key={index} source={source} />
      ))}
    </tbody>
  )
}
