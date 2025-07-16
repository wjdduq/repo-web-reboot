import { useState } from 'react'

export default function App() {
  const [text, setText] = useState('hi')

  // fragment
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={function (event) {
          setText(event.target.value)
        }}
      />
      <button
        onClick={function () {
          console.log(text)
        }}>
        login
      </button>
      <h1>{text}</h1>
    </>
  )
}
