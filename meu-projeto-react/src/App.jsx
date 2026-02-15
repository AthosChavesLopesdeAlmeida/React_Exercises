import { useState } from 'react';
import './index.css'

function App() {
  const [name, setName] = useState('')
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim()) return 

    setLoading(true)
    try {
      const apiKey = import.meta.env.VITE_UNSPLASH_KEY;
      console.log('API Key loaded:', apiKey)
      console.log('Searching for:', name)
      
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${name}&per_page=9`,
        {
          headers: {
            Authorization: `Client-ID ${apiKey}`
          }
        }
      )

      console.log('Response status:', response.status)
      const data = await response.json()
      console.log('Data received:', data)
      setImages(data.results)
    } catch (error) {
      console.log('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <header>
        <h1>Unsplash Images</h1>
        
        <form onSubmit={handleSubmit}>
          <input type="text" className='product_input' 
          onChange={(e) => setName(e.target.value)} value={name}/>
          <button type='submit'>
            Search
          </button>
        </form>
      </header>
      
      <main>
        {loading ? 
        <p>Loading...</p> :
        images.map((image) => (
          <img src={image.urls.regular} key={image.id} alt={image.alt_description}/>
        ))
        }
      </main>
    </>
  )
}

export default App