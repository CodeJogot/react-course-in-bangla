import React from 'react'

export default function ButtonCounter({count, increment}) {
  return (
    <button onClick={increment}>Clicked {count} Times</button>
  )
}
