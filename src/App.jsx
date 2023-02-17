import React, { useState } from 'react'

const App = () => {

  const [open, setOpen] = useState(0);

  return (
    <div>
      <h2>count {open}</h2>

      <button onClick={() => setOpen(open + 1)}>+</button>
      <button onClick={() => setOpen(open - 1)}>-</button>
    </div>
  )
}

export default App
