import './index.css'
import { useState } from "react"
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count);
    
    if (count <= 0) {
      amount = 1
    }

    if (count > 8) {
      amount = 8
    }

    setText(data.slice(0, amount))
  }

  return (
    <section>
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <form className="lorem_form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs: </label>
        <input type="number" name="amount" id="amount" 
        onChange={(e) => setCount(e.target.value)} className='amount_input'/>
        <button className="btn">Generate</button>
      </form>
      <article>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App