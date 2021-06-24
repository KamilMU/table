import React from 'react';
import ShowButton from './ShowButton.jsx';
import ChildrenRows from './ChildrenRows.jsx';

export default function Row({ source }) {
  const [clicked, setClicked] = React.useState(false)

  return (
    <>
      <tr
        className={source.sourceName === 'Итого' ? 'sum' : ''}
        style={clicked && source.sourceName !== 'Итого' ? { backgroundColor: 'rgb(233, 233, 233)' } : { backgroundColor: '' }}>
        <td>
          <div style={{ display: 'flex' }}>
            <ShowButton source={source} clicked={clicked} setClicked={setClicked} />
            <div className={source.sourceName !== 'Итого' ? "source-name" : ''}>
              {source.sourceName !== 'Итого' && (<img src={source.img} alt="" />)}
              <div className={source.sourceName !== 'Итого' ? "source-name__content" : 'sum__name'}>
                {source.sourceName}
                {source.sourceName !== 'Итого' && (
                  <div>{source.type}. {source.children && 'Источников: ' + source.children.length}</div>
                )}
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
