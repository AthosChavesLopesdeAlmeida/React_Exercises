import './index.css'
import React, { useState } from 'react'
import Button from './Buttons'
import Menu from './Menu'
import items from './data'

function App() {
  const [menu, setMenu] = useState(items)
  const categories = ['All', ...new Set(items.map((item) => item.category))]

  const filterCategories = (category) => {
    if (category === 'All') {
      setMenu(items)
      return
    }

    let newItems = items.filter((item) => item.category === category)
    setMenu(newItems)
  }

  return (
    <>
      <header className='our_menu'>
        <h1>Our Menu</h1>
        <div className='yellow_bar'></div>
      </header>
      <main className='rest_of_the_stuff'>
        <Button categories={categories} filterCategories={filterCategories}/>
        <Menu items={menu}/>
      </main>
    </>
  )
}

export default App