import React from 'react'

export default function ShowButton({ source, childrenOpen, setChildrenOpen }) {
  return (
    <>
      <div className="btn-container">
        {source.children && (<button
          className="btn"
          onClick={() => setChildrenOpen(!childrenOpen)}>
          {childrenOpen ? '-' : '+'}
        </button>)}
      </div>
    </>
  )
}
