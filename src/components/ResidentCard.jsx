import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import "./ResidentCard.css"

const ResidentCard = ({url}) => {

    const[resident, getResident, hasError, loading] = useFetch(url)

    useEffect(() => {
      getResident()
    }, [])
    
  return (
    <div className="resident-container">
     <header>
        <img src={resident?.image} alt={resident?.name} />
        <div> 
            <div></div>
            <div>{resident?.status}</div>
        </div>
     </header>
     <section>
        <h3>{resident?.name}</h3>
        <hr />
        <ul>
            <li><span>Specie:</span><span>{resident?.species}</span></li>
            <li><span>Origin:</span><span>{resident?.origin.name}</span></li>
            <li><span>Episodes where appear:</span><span>{resident?.episode.length}</span></li>
        </ul>
     </section>
    </div>
  )
}

export default ResidentCard
