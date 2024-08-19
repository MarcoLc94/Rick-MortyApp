import "./LocationCard.css"

function LocationCard({location}) {
    console.log(location)
  return (
    <div className="card-container">
      <h2>{location?.name}</h2>
      <ul>
        <li><span>Type: </span><span>{location?.type}</span></li>
        <li><span>Dimension: </span><span></span>{location?.dimension}</li>
        <li><span>Population: </span><span>{location.residents?.length}</span></li>
      </ul>
    </div>
  )
}

export default LocationCard
