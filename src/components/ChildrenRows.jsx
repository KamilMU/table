import React from 'react'

export default function ChildrenRows({ clicked, source }) {
  return (
    <>
      {clicked && source.children && source.children.map((child, index) => (
        <tr key={index} style={clicked ? { backgroundColor: 'rgb(233, 233, 233)' } : { backgroundColor: 'rgb(247, 247, 247)' }}>
          <td>
            <img src={child.img} alt="" />
            {child.name}
          </td>

          <td><div>{source.shows}</div></td>
          <td><div>{source.clicks}</div></td>
          <td><div>{source.session}</div></td>
          <td><div>{source.ctr}</div></td>
          <td><div>{source.clickPrice}</div></td>
          <td><div>{source.expenses}</div></td>


          <td>{source.salesAmount}</td>
          <td>{source.salesCpa}</td>
          <td>{source.salesProceeds}</td>

          <td>{source.targetAmount}</td>
          <td>{source.targetCpa}</td>
          <td>{source.targetCr}</td>

        </tr>
      ))}
    </>
  )
}
