import React from 'react'

export default function Td({ sort, tdName, questionMark, link }) {
  const [ordered, setOrdered] = React.useState(false);

  React.useEffect(() => {
    sort(ordered);
  }, [ordered])

  return (
    <td onClick={() => {
      setOrdered(!ordered);
    }}>
      {tdName} {questionMark} {!ordered ? <strong>&#8595;</strong> : <strong>&#8593;</strong>}
      <div>
        {link}
      </div>
    </td>
  )
}
