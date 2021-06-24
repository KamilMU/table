import React from 'react';
import ShowButton from './ShowButton.jsx';
import ChildrenRows from './ChildrenRows.jsx';

export default function Row({ source }) {
  const [clicked, setClicked] = React.useState(false);

  return (
    <>
      <tr
        style={clicked ? { backgroundColor: 'rgb(233, 233, 233)' } : ''}>
        <td>
          <div style={{ display: 'flex' }}>
            <ShowButton source={source} clicked={clicked} setClicked={setClicked} />
            <div className={"source-name"}>
              <img src={source.img} alt="" />
              <div className={"source-name__content"}>
                {source.sourceName}
                <div>{source.type}. {source.children && 'Источников: ' + source.children.length}</div>
              </div>
            </div>
          </div>
        </td>

        <td><div>{source.shows}</div></td>
        <td><div>{source.clicks}</div></td>
        <td><div>{source.session}</div></td>
        <td><div>{source.ctr}</div></td>
        <td><div>{source.clickPrice}</div></td>
        <td><div>{source.expenses}</div></td>

        <td><a href="#">{source.salesAmount}</a> </td>
        <td>{source.salesCpa}</td>
        <td>{source.salesProceeds}</td>

        <td>{source.targetAmount}</td>
        <td>{source.targetCpa}</td>
        <td>{source.targetCr}</td>

      </tr>
      <ChildrenRows clicked={clicked} source={source} />
    </>
  )
}
