import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from "../services/apiConfig"

export default function ResultsHeartRate() {
  const [sum, setSum] = useState({})
  const { id } = useParams();

  useEffect(() => {
    const fetchSum = async () => {
      const res = await api.get(`/heart/${id}`)
      setSum(res.data)
    }
    fetchSum();
  }, []);



  return (
    <div>
      <div className="met-results-top">
        <h2>Your Results</h2>
        <h3>Your resting heartrate is calculated to {sum.fields?.restingHeartRate}.
          <br />
          <br />
          With a resting heartheart of {sum.fields?.restingHeartRate},
          you are placed in the category.</h3>
      </div>
      <div className="results-metric">


        <div className="met-results-horizontal"></div>
        <div className="results-met-bottom">
          <p>Heartrate is used as a screening tool. Heartrate is not intended to diagnose any illnesses
            <a className="reference" href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html">[1]</a>.</p>
          <p>Random info about RHR</p>

          <p>To gain more information or pursue action. Reach out to your healthcare provider for additional information.</p>
        </div>
        <Link to={`/heart-rate-results/${id}`}></Link>
      </div>
    </div>
  )
}
