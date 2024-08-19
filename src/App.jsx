import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandom from './helpers/random.js'
import LocationCard from './components/LocationCard.jsx'
import ResidentCard from './components/ResidentCard.jsx'

function App() {
  const [locationId, setLocationId] = useState(getRandom(126))
  const url = `https://rickandmortyapi.com/api/location/${locationId}`
  const[location, getLocation, hasError, loading] = useFetch(url)

  useEffect(() => {
  getLocation()
  }, [locationId])

  const handleSubmit = (event) => {
    event.preventDefault()
    setLocationId(inputId.current.value)
  }

  const inputId = useRef()

  return (
    <div className='container-app'>
      {loading && <p>Loading...</p>}
      {hasError && <p>Error loading location...</p>}
      {!loading && !hasError && (
        <>
          <div className='title-container'>
            <span><img src="/pngegg.png" alt=""/></span>
            <h1>Rick & Morty</h1>
            <span><img src="/klipartz.com.png" alt=""/></span>
          </div>
          <div className='form-container'>
          <form onSubmit={handleSubmit}>
          <input type="number" ref={inputId} placeholder="Search by location" min="1" max="126" defaultValue="1"/>
            <button>Search</button>
          </form>
          </div>
          <div className='info-container'>
            <LocationCard location={location}/>
            <section className='cards-characters'>
              {location?.residents.map((url) => (
                <ResidentCard key={url} url={url}/>
              ))}
            </section>
          </div>
        </>
      )}
    </div>
  )
  
}

export default App
