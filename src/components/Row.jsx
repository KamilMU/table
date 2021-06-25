import React from 'react';
import ShowButton from './ShowButton.jsx';
import ChildrenRows from './ChildrenRows.jsx';

export default function Row({ source }) {
  const [childrenOpen, setChildrenOpen] = React.useState(false);

  return (
    <>
      <tr
        className={childrenOpen ? 'gray' : ''}>
        <td>
          <div className="name-row">
            <ShowButton source={source} childrenOpen={childrenOpen} setChildrenOpen={setChildrenOpen} />
            <div className={"source-name"}>
              <img src={source.img} alt="" />
              <div className={"source-name__content"}>
                {source.sourceName}
                <div>{source.type}. {source.children && 'Источников: ' + source.children.length}</div>
              </div>
            </div>

            {!source.children && <div className="green"></div>}
          </div>
        </td>
        <td className="indicators">{source.shows}</td>
        <td className="indicators">{source.clicks}</td>
        <td className="indicators">{source.session}</td>
        <td className="indicators">{source.ctr}</td>
        <td className="indicators">{source.clickPrice}</td>
        <td className="indicators">{source.expenses}</td>
        <td className="indicators"><a href="#">{source.salesAmount}</a></td>
        <td className="indicators">{source.salesCpa}</td>
        <td className="indicators">{source.salesProceeds}</td>
        <td className="indicators">{source.targetAmount}</td>
        <td className="indicators">{source.targetCpa}</td>
        <td className="indicators">{source.targetCr}</td>
      </tr>
      <ChildrenRows childrenOpen={childrenOpen} source={source} />
    </>
  )
}
