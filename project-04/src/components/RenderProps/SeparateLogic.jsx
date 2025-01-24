import React, { useState } from 'react'

export default function SeparateLogic({render}) {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(()=>count + 1);
    }
  return (
    <div>
        {render(count, increment)}
    </div>
  )
}
