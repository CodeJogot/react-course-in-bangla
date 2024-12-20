import React, { useState } from 'react'

export default function ButtonCounter({count, increment}) {
  return (
    <h1>
        <button onClick={increment}>Click {count} Times</button>
    </h1>
  )
}
