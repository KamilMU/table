import React from 'react'

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
  const [ordered, setOrdered] = React.useState(false);

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
        <td onClick={sortSourcesByShows}>Показы <i className="fa fa-question-circle"></i></td>
        <td onClick={sortSourcesByClickes}>Клики</td>
        <td onClick={() => {
          sortSourcesBySession();
          setOrdered(!ordered);
        }}>Сеансы {!ordered ? <strong>&#8595;</strong> : <strong>&#8593;</strong>}
        </td>
        <td onClick={sortSourcesByCtr}>CTR <i className="fa fa-question-circle"></i></td>
        <td onClick={sortSourcesByClickPrice}>Цена клика</td>
        <td onClick={sortSourcesByExpenses}>
          <div>
            <div>Затраты</div>
            <a href="#">Настроить? <i className="fa fa-question-circle"></i></a>
          </div>
        </td>

        <td onClick={sortSourcesBySalesAmount}>Кол-во</td>
        <td onClick={sortSourcesBySalesCpa}>CPA</td>
        <td onClick={sortSourcesBySalesProceeds}>Выручка</td>

        <td onClick={sortSourcesByTargetAmount}>Кол-во</td>
        <td onClick={sortSourcesByTargetCpa}>CPA</td>
        <td onClick={sortSourcesByTargetCr}>CR,%</td>

      </tr>
    </thead>
  )
}
