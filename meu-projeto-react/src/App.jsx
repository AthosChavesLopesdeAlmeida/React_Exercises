import React, { useState } from 'react'
import './index.css'
import List from './Items'

function App() {
  const [list, setList] = useState([])
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!title) {
      console.log('error')
    } else {
      const newItem = {id: new Date().getTime().toString(), title: title}
      setList([...list, newItem])
    }

    setTitle('')
    return
  }

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id))
  }

  const checkItem = (id) => {
    let checkedItem = list.find((item) => item.id === id)
    console.log(`${checkedItem}: CHECKED`)
  }

  return (
    <section className='container'>
      <h3>Grocery Bud</h3>
      
      <form onSubmit={handleSubmit}>
        <input type="text" 
        className='product_input' 
        onChange={(e) => setTitle(e.target.value)}/>

        <button className='btn' type='submit'>Add</button>
      </form>
      
      <List items={list} removeItem={removeItem} editItem={checkItem}/>
    </section>
  )
}

export default App