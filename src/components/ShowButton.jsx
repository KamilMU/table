import React from 'react'

export default function ShowButton({ source, clicked, setClicked }) {
  return (
    <>
      <div className="btn-container">
        {source.children && (<button
          className="btn"
          onClick={() => setClicked(!clicked)}>
          {clicked ? '-' : '+'}
        </button>)}
      </div>
    </>
  )
}
