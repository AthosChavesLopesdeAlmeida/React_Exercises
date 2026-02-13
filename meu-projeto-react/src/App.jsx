import Button from "./Buttons"
import people from './data'
import Review from './Info'
import { useState } from "react"
import './index.css'

function App() {
  const [index, setIndex] = useState(0)
  const [currentReview, setCurrentReview] = useState(people[0])

  const nextReview = () => {
    const newIndex = index >= people.length - 1 ? 0 : index + 1
    setIndex(newIndex)
    setCurrentReview(people[newIndex])
  }

  const prevReview = () => {
    const newIndex = index <= 0 ? people.length - 1 : index - 1
    setIndex(newIndex)
    setCurrentReview(people[newIndex])
  }

  return (
    <div className="container_of_all_elements">
      <Button action={prevReview} symbol={'<'}/>
      <Review person={currentReview}/>
      <Button action={nextReview} symbol={'>'}/>
    </div>
  )
}

export default App