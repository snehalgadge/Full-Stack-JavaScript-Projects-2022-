import { useState } from 'react'
// Component
import Board from './component/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Board/>
    </div>
  )
}

export default App
