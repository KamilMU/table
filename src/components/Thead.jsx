import React from 'react';
import Td from './Td.jsx';

export default function Thead({
  sortSourcesByClickes,
  sortSourcesByShows,
  sortSourcesBySession,
  sortSourcesByCtr,
  sortSourcesByClickPrice,
  sortSourcesByExpenses,
  sortSourcesBySalesAmount,
  sortSourcesBySalesCpa,
  sortSourcesBySalesProceeds,
  sortSourcesByTargetAmount,
  sortSourcesByTargetCpa,
  sortSourcesByTargetCr
}) {
  return (
    <thead>
      <tr>
        <td className="header header_red">Источник трафика</td>
        <td className="header header_red" colSpan="6">Трафик</td>
        <td className="header" colSpan="3">
          <div className="header__content header_red">
            <img src={require('../images/crm.png')} alt="" />
            <div>Продажи</div>
          </div>
          <div className="header__content header_thin">
            <img src={require('../images/model_linear.png')} alt="" />
            <div>Линейная модель</div>
          </div>

        </td>
        <td className="header" colSpan="3">
          <div className="header__content header_red">
            <img src={require('../images/composite1.png')} alt="" />
            <div>Цель</div>
          </div>
          <div className="header__content header_thin">
            <img src={require('../images/composite2.png')} alt="" />
            <div>Составная цель</div>
          </div>
        </td>
      </tr>

      <tr>
        <td>Название</td>
        <Td
          sort={sortSourcesByShows}
          tdName={'Показы'}
          questionMark={<i className="fa fa-question-circle"></i>}
        />
        <Td sort={sortSourcesByClickes} tdName={'Клики'} />
        <Td sort={sortSourcesBySession} tdName={'Сеансы'} />
        <Td sort={sortSourcesByCtr} tdName={'CTR'} />
        <Td sort={sortSourcesByClickPrice} tdName={'Цена клика'} />
        <Td
          sort={sortSourcesByExpenses}
          tdName={'Затраты'}
          link={<a href="#">Настроить? <i className="fa fa-question-circle"></i></a>}
        />

        <Td sort={sortSourcesBySalesAmount} tdName={'Кол-во'} />
        <Td sort={sortSourcesBySalesCpa} tdName={'CPA'} />
        <Td sort={sortSourcesBySalesProceeds} tdName={'Выручка'} />

        <Td sort={sortSourcesByTargetAmount} tdName={'Кол-во'} />
        <Td sort={sortSourcesByTargetCpa} tdName={'CPA'} />
        <Td sort={sortSourcesByTargetCr} tdName={'CR,%'} />
      </tr>
    </thead>
  )
}
