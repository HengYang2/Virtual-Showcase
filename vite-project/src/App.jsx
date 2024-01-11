import { useState } from 'react'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)

  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
      .then(response => {
        console.log(response.data.content);
      }).catch(error => {
        console.log("error")
      })
  }

  return (
    <>
      <div>
        <button onClick={() => {getQuote()}}>Get Quote</button>
      </div>
    </>
  )
}

export default App
