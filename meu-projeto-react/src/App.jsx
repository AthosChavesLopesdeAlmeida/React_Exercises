import './index.css'
import questions from './data'
import Question from './Question'

function App() {
  return (
    <>
      <main className='main-container'>
        <header>
          <h1>Questions</h1>
        </header>
        <ul>
          {questions.map((question) => {
            return (
              <Question key={question.id} {...question}/>
            )
          })}
        </ul>
      </main>
    </>
  )
}

export default App