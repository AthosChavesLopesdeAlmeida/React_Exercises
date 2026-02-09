import data from "./data"
import { useState } from "react"

export default function Review () {
  const [index, setIndex] = useState(0)
  const {name, image, job, text} = data[index]
  
  const checkIndex = (number) => {
    if (number > data.length - 1) {
      return 0
    }

    if (number < 0) {
      return data.length - 1
    }

    return number
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkIndex(newIndex)
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkIndex(newIndex)
    })
  }

  const randomPerson = () => {
    let newIndex = Math.floor(Math.random() * data.length)
    if (newIndex === index) {
      newIndex = index + 1
    }
    setIndex(checkIndex(newIndex))
  }

  return (
    <>
    <div className="review_container">
      <img src={image} alt="" />
      <h2>{name}</h2>
      <h5>{job.toUpperCase()}</h5>
      <p>{text}</p>
    </div>
    
    <div className="controls_container">
      <button onClick={prevPerson} className="change_button lt">&lt;</button>
      <button onClick={randomPerson} className="random_button">RANDOM PERSON</button>
      <button onClick={nextPerson} className="change_button gt">&gt;</button>
    </div>
    </>
  )

}