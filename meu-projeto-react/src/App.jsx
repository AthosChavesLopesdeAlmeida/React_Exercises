import './index.css'
import List from './List'
import { toursData } from './data'

function App() {
  return (
    <>
      <header>
        <h1>Our Tours</h1>
        <div className="title_footer"></div>
      </header>
      <List tours={toursData} />
    </>
  )
}

export default App