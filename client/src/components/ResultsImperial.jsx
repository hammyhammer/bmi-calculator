import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from "../services/apiConfig"

export default function ResultsImperial() {
  const [sum, setSum] = useState({})
  const { id } = useParams();

  useEffect(() => {
    const fetchSum = async () => {
      const res = await api.get(`/imperial/${id}`)
      setSum(res.data)
    }
    fetchSum();
  }, []);


  return (
    <div>
      <h1>Your Results</h1>
      <h5>Your BMI is calculated to {Number.parseFloat(sum.fields?.calculationImperial).toFixed(2)}%. <br />
        With a BMI of {Number.parseFloat(sum.fields?.calculationImperial).toFixed(2)}%, you are placed in the {sum.fields?.categoryImperial} category.</h5>
      <Link to={`/imperial-results/${id}`}></Link>
    </div>
  )
}
