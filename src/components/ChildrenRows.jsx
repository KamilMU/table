import React from 'react'

export default function ChildrenRows({ childrenOpen, source }) {
  return (
    <>
      {childrenOpen && source.children && source.children.map((child, index) => (
        <tr key={index} style={childrenOpen ? { backgroundColor: 'rgb(233, 233, 233)' } : { backgroundColor: '' }}>
          <td className="child-name">
            <img src={child.img} alt="" />
            {child.name}
          </td>
          <td className="indicators">{source.shows}</td>
          <td className="indicators">{source.clicks}</td>
          <td className="indicators">{source.session}</td>
          <td className="indicators">{source.ctr}</td>
          <td className="indicators">{source.clickPrice}</td>
          <td className="indicators">{source.expenses}</td>
          <td className="indicators">{source.salesAmount}</td>
          <td className="indicators">{source.salesCpa}</td>
          <td className="indicators">{source.salesProceeds}</td>
          <td className="indicators">{source.targetAmount}</td>
          <td className="indicators">{source.targetCpa}</td>
          <td className="indicators">{source.targetCr}</td>
        </tr>
      ))}
    </>
  )
}
