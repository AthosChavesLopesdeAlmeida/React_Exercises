import { useEffect, useState } from 'react'
import Dest from './Dest'

export default function List({ url, tours: initialTours }) {
  const [tours, setTours] = useState(initialTours || [])
  const [loading, setLoading] = useState(!initialTours)
  const [error, setError] = useState(null)

  const deleteItem = (id) => {
    const filteredTours = tours.filter(tour => tour.id !== id)
    setTours(filteredTours)
  }

  useEffect(() => {
    if (initialTours) return

    if (!url) return

    async function fetchTours() {
      try {
        setLoading(true)
        const res = await fetch(url)
        
        if (!res.ok) {
          throw new Error(`Erro HTTP: ${res.status}`)
        }
        
        const data = await res.json()
        setTours(data)
        setError(null)
      } catch (err) {
        console.error('Erro ao buscar tours:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchTours()
  }, [url, initialTours])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (tours.length === 0) return <p>No tours</p>

  return (
    <ul className="destinations_list">
      {tours.map(tour => (
        <li key={tour.id}>
          <Dest {...tour} deleteItem={deleteItem} />
        </li>
      ))}
    </ul>
  )
}