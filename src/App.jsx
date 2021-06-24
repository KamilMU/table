import React from 'react';
import Thead from './components/Thead.jsx';
import Tbody from './components/Tbody.jsx';

export default function App() {
  const [sources, setSources] = React.useState([
    {
      sourceName: 'Пр тр',
      img: require('./images/usersgroup.png'),
      type: 'Группа',
      children: [
        {
          shows: 0,
          name: 'Child / email',
          img: require('./images/e-mail.ico'),
          clicks: 6889,
          session: 5325,
          ctr: 0,
          clickPrice: 11.06,
          expenses: 76195,
          amount: 1047.09,
          cpa: 71030,
          proceeds: 2150890,
        }
      ],

      shows: 0,
      clicks: 6889,
      session: 5325,
      ctr: 0,
      clickPrice: 11.06,
      expenses: 76195,

      salesAmount: 1047.09,
      salesCpa: 7.2,
      salesProceeds: 2150890,

      targetAmount: 1047.09,
      targetCpa: 71.4,
      targetCr: 12.33,
    },

    {
      sourceName: 'Яндекс Директ',
      img: require('./images/favicon.ico'),
      type: 'Платная реклама',

      shows: 567210,
      clicks: 26889,
      session: 5325,
      ctr: 0,
      clickPrice: 11.06,
      expenses: 76195,

      salesAmount: 1047.09,
      salesCpa: 71.1,
      salesProceeds: 2150890,

      targetAmount: 1047.09,
      targetCpa: 34,
      targetCr: 42.33,
    },

    {
      sourceName: 'Органический поиск',
      img: require('./images/search.png'),
      type: 'Группа',
      children: [
        {
          shows: 0,
          name: 'Child / email',
          img: require('./images/e-mail.ico'),
          clicks: 2889,
          session: 5325,
          ctr: 0,
          clickPrice: 11.06,
          expenses: 76195,
          amount: 1047.09,
          cpa: 71.030,
          proceeds: 2150890,
        }
      ],

      shows: 1220,
      clicks: 2889,
      session: 5325,
      ctr: 0,
      clickPrice: 11.06,
      expenses: 76195,

      salesAmount: 1047.09,
      salesCpa: 71.030,
      salesProceeds: 2150890,

      targetAmount: 1047.09,
      targetCpa: 71.30,
      targetCr: 52.33,
    },

    {
      sourceName: 'Google Ads',
      img: require('./images/ads_24dp.png'),
      type: 'Платная реклама',

      shows: 5727,
      clicks: 252,
      session: 449,
      ctr: 4.78,
      clickPrice: 58.77,
      expenses: 14809,

      salesAmount: 107,
      salesCpa: 13.30,
      salesProceeds: 242890,

      targetAmount: 1047.09,
      targetCpa: 71.30,
      targetCr: 22.36,
    },

    {
      sourceName: 'Переходы с сайтов',
      img: require('./images/chain.png'),
      type: 'Группа',

      shows: 0,
      clicks: 220,
      session: 220,
      ctr: 0,
      clickPrice: 0,
      expenses: 0,
      children: [
        {
          shows: 0,
          name: 'Child / email',
          img: require('./images/cm.ico'),
          clicks: 2889,
          session: 5325,
          ctr: 0,
          clickPrice: 11.06,
          expenses: 76195,
          amount: 1047.09,
          cpa: 71030,
          proceeds: 2150890,
        },
        {
          shows: 0,
          name: 'Child / email',
          img: require('./images/cm.ico'),
          clicks: 2889,
          session: 5325,
          ctr: 0,
          clickPrice: 11.06,
          expenses: 76195,
          amount: 1047.09,
          cpa: 71030,
          proceeds: 2150890,
        },
        {
          shows: 0,
          name: 'Child / email',
          img: require('./images/cm.ico'),
          clicks: 2889,
          session: 5325,
          ctr: 0,
          clickPrice: 11.06,
          expenses: 76195,
          amount: 1047.09,
          cpa: 71030,
          proceeds: 2150890,
        },
        {
          shows: 0,
          name: 'Child / email',
          img: require('./images/cm.ico'),
          clicks: 2889,
          session: 5325,
          ctr: 0,
          clickPrice: 11.06,
          expenses: 76195,
          amount: 1047.09,
          cpa: 71030,
          proceeds: 2150890,
        },
        {
          shows: 0,
          name: 'Child / email',
          img: require('./images/cm.ico'),
          clicks: 2889,
          session: 5325,
          ctr: 0,
          clickPrice: 11.06,
          expenses: 76195,
          amount: 1047.09,
          cpa: 71030,
          proceeds: 2150890,
        },
        {
          shows: 0,
          name: 'Child / email',
          img: require('./images/cm.ico'),
          clicks: 2889,
          session: 5325,
          ctr: 0,
          clickPrice: 11.06,
          expenses: 76195,
          amount: 1047.09,
          cpa: 71030,
          proceeds: 2150890,
        },
        {
          shows: 0,
          name: 'переход',
          img: require('./images/cm.ico'),
          clicks: 2889,
          session: 5325,
          ctr: 0,
          clickPrice: 11.06,
          expenses: 76195,
          amount: 1047.09,
          cpa: 71030,
          proceeds: 2150890,
        },
        {
          shows: 0,
          name: 'переход',
          img: require('./images/cm.ico'),
          clicks: 2889,
          session: 5325,
          ctr: 0,
          clickPrice: 11.06,
          expenses: 76195,
          amount: 1047.09,
          cpa: 71030,
          proceeds: 2150890,
        },
        {
          shows: 0,
          name: 'переход',
          img: require('./images/cm.ico'),
          clicks: 2889,
          session: 5325,
          ctr: 0,
          clickPrice: 11.06,
          expenses: 76195,
          amount: 1047.09,
          cpa: 71030,
          proceeds: 2150890,
        },
        {
          shows: 0,
          name: 'переход',
          img: require('./images/cm.ico'),
          clicks: 2889,
          session: 5325,
          ctr: 0,
          clickPrice: 11.06,
          expenses: 76195,
          amount: 1047.09,
          cpa: 71030,
          proceeds: 2150890,
        }
      ],
      salesAmount: 55,
      salesCpa: 0,
      salesProceeds: 242890,

      targetAmount: 1047.09,
      targetCpa: 0,
      targetCr: 22.4,
    },

    {
      sourceName: 'E-mail рассылки',
      img: require('./images/e-mail.ico'),
      type: 'Группа',

      shows: 0,
      clicks: 84,
      session: 84,
      ctr: 0,
      clickPrice: 75,
      expenses: 6300,
      children: [
        {
          shows: 0,
          name: 'email / email',
          img: require('./images/getresponse.ico'),
          clicks: 84,
          session: 81,
          ctr: 0,
          clickPrice: 0,
          expenses: 1,
          amount: 0,
          cpa: 0,
          proceeds: 0,
        },
        {
          shows: 0,
          name: 'cm / email',
          img: require('./images/cm.ico'),
          clicks: 0,
          session: 0,
          ctr: 0,
          clickPrice: 0,
          expenses: 3000,
          amount: 0,
          cpa: 1,
          proceeds: 0,
        },
        {
          shows: 0,
          name: 'getresponse / email',
          img: require('./images/getresponse.ico'),
          clicks: 0,
          session: 1,
          ctr: 0,
          clickPrice: 1,
          expenses: 0,
          amount: 1,
          cpa: 0,
          proceeds: 1,
        },
        {
          shows: 0,
          name: 'cm / email',
          img: require('./images/cm.ico'),
          clicks: 1,
          session: 0,
          ctr: 0,
          clickPrice: 0,
          expenses: 0,
          amount: 0,
          cpa: 1,
          proceeds: 0,
        },
        {
          shows: 0,
          name: 'cm / email',
          img: require('./images/cm.ico'),
          clicks: 1,
          session: 1,
          ctr: 0,
          clickPrice: 0,
          expenses: 3100,
          amount: 0,
          cpa: 0,
          proceeds: 0,
        }
      ],
      salesAmount: 15.4,
      salesCpa: 40.1,
      salesProceeds: 29021.02,

      targetAmount: 2,
      targetCpa: 0,
      targetCr: 72.12,
    },
  ])

  React.useEffect(() => {
    function sum() {
      const result = sources.reduce((acc, cur) => {
        acc.shows += cur.shows
        acc.clicks += cur.clicks
        acc.session += cur.session
        acc.ctr += cur.ctr
        acc.clickPrice += cur.clickPrice
        acc.expenses += cur.expenses
        acc.salesAmount += cur.salesAmount
        acc.salesCpa += cur.salesCpa
        acc.salesProceeds += cur.salesProceeds
        acc.targetAmount += cur.targetAmount
        acc.targetCpa += cur.targetCpa
        acc.targetCr += cur.targetCr

        return acc
      }, {
        sourceName: 'Итого',
        shows: 0,
        clicks: 0,
        session: 0,
        ctr: 0,
        clickPrice: 0,
        expenses: 0,

        salesAmount: 0,
        salesCpa: 0,
        salesProceeds: 0,

        targetAmount: 0,
        targetCpa: 0,
        targetCr: 0,
      })

      setSources([result, ...sources])
    }

    sum()
  }, [])

  function sortSourcesByClickes() {
    setSources([...sources.sort((a, b) => b.clicks - a.clicks)])
  }

  function sortSourcesByShows() {
    setSources([...sources.sort((a, b) => b.shows - a.shows)])
  }

  function sortSourcesBySession() {
    setSources([...sources.sort((a, b) => b.session - a.session)])
  }

  function sortSourcesByCtr() {
    setSources([...sources.sort((a, b) => b.ctr - a.ctr)])
  }

  function sortSourcesByClickPrice() {
    setSources([...sources.sort((a, b) => b.clickPrice - a.clickPrice)])
  }

  function sortSourcesByExpenses() {
    setSources([...sources.sort((a, b) => b.expenses - a.expenses)])
  }

  function sortSourcesBySalesAmount() {
    setSources([...sources.sort((a, b) => b.salesAmount - a.salesAmount)])
  }

  function sortSourcesBySalesCpa() {
    setSources([...sources.sort((a, b) => b.salesCpa - a.salesCpa)])
  }

  function sortSourcesBySalesProceeds() {
    setSources([...sources.sort((a, b) => b.salesProceeds - a.salesProceeds)])
  }

  function sortSourcesByTargetAmount() {
    setSources([...sources.sort((a, b) => b.targetAmount - a.targetAmount)])
  }

  function sortSourcesByTargetCpa() {
    setSources([...sources.sort((a, b) => b.targetCpa - a.targetCpa)])
  }

  function sortSourcesByTargetCr() {
    setSources([...sources.sort((a, b) => b.targetCr - a.targetCr)])
  }

  return (
    <div className="container">
      <table>
        <Thead
          sortSourcesByClickes={sortSourcesByClickes}
          sortSourcesByShows={sortSourcesByShows}
          sortSourcesBySession={sortSourcesBySession}
          sortSourcesByCtr={sortSourcesByCtr}
          sortSourcesByClickPrice={sortSourcesByClickPrice}
          sortSourcesByExpenses={sortSourcesByExpenses}
          sortSourcesBySalesAmount={sortSourcesBySalesAmount}
          sortSourcesBySalesCpa={sortSourcesBySalesCpa}
          sortSourcesBySalesProceeds={sortSourcesBySalesProceeds}
          sortSourcesByTargetAmount={sortSourcesByTargetAmount}
          sortSourcesByTargetCpa={sortSourcesByTargetCpa}
          sortSourcesByTargetCr={sortSourcesByTargetCr}
        />
        <Tbody sources={sources} />
      </table>
    </div>
  )
}
