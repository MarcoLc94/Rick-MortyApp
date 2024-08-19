import { useState } from "react"
import axios from "axios"

const useFetch = (url) => {
  const [data, setData] = useState()
  const[hasError, setHasError] = useState(false)
  const[loading, setLoading] = useState(true)

  const getData = () => {
  axios.get(url)
  .then(res => {
    setData(res.data)
    setHasError(false)
})
  .catch(error => {
     console.error(error)
     setHasError(true)})
  
  .finally(() => {
    setLoading(false)
  })
  }

  return [data, getData, hasError, loading]
}

export default useFetch
