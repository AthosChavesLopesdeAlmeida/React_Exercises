import { useState } from "react"

export default function Question ({title, info}) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <li className="total_question_div">
      <div className="question_and_button_div">
        <h3 className="question_title">{title}</h3>
        <button className="open_close_button" onClick={() => setIsOpen(!isOpen)}> 
          {isOpen ? '−' : '+'}
        </button>
      </div>
      
      {isOpen && (
        <p className="info_paragraph">
          {info}
        </p>
      )}
    </li>
  )
}