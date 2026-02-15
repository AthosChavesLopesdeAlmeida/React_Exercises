import React, { useState } from 'react'
import { links } from './data'
import { FaBars } from 'react-icons/fa'
import './index.css'

function App() {
  const siteLinks = links
  const [showLinks, setShowLinks] = useState(false)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
<nav className='navigation'>
  <header className='supa_mega_header_no_idea_for_a_coherent_name'>
    <h3 className='coding'>
      Coding <span className='addict'>Addict</span>
    </h3>
    <button className='hamburger_menu' onClick={toggleLinks}>
      <FaBars/>
    </button>
  </header>
  <ul className={showLinks === false ? 'closed' : 'open'}>
    {siteLinks.map((link) => {
      const {id, url, text} = link
      return (
        <li key={id}><a href={url}>{text}</a></li>
      )
    })}
  </ul>
</nav>
  )
}

export default App