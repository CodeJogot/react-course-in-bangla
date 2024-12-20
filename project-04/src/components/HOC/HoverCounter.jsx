import React, { useState } from 'react'

export default function HoverCounter({count, increment}) {
  return (
    <>
        <h1 onMouseOver={increment}>Hover {count} Times</h1>
    </>
  )
}
