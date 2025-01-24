import React from 'react'

export default function HoverCounter({count, increment}) {
  return (
    <h1 onMouseOver={increment}>Hovered {count} Times</h1>
  )
}
