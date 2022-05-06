import { useState, useEffect } from 'react'

function monitor (...args: any) {
  console.log(...args)
}

export default function Demo (props: any) {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [a, setA] = useState('')

  useEffect(() => {
    monitor(props.count, count, text, a)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.count, count])

  return (
    <div>
      <button
        onClick={() => setCount(c => c + 1)}
      >
        click
      </button>
      <input value={text} onChange={e => setText(e.target.value)} />
      <input value={a} onChange={e => setA(e.target.value)} />
    </div>
  )
}
