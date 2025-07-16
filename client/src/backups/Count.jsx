import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  function increase() {
    setCount(count + 1)
    console.log(count + 1)
  }

  function decrease() {
    setCount(count - 1)
  }

  return (
    <>
      <div>Hello {count}!</div>
      <button onClick={increase}>inc</button>
      <button onClick={decrease}>dec</button>
    </>
  )
}
