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
          With a resting heartrate of {sum.fields?.restingHeartRate},
          it is considered within the {sum.fields?.heartCategory} range.</h3>
      </div>
      <div className="results-metric">


        <div className="met-results-horizontal"></div>
        <div className="results-met-bottom">
          {/* <p>Heartrate is used as a screening tool. Heartrate is not intended to diagnose any illnesses */}
          {/* <a className="reference" href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html">[1]</a>.</p> */}
          <p>{sum.fields?.heartRisks}
            {sum.fields?.heartCategory === 'Below Normal' ? <a className="reference" href="https://www.uofmhealth.org/health-library/aa107571">[2]</a> :
              sum.fields?.heartCategory === "Normal" ? <a className="reference" href="https://www.mayoclinic.org/healthy-lifestyle/fitness/expert-answers/heart-rate/faq-20057979#:~:text=A%20normal%20resting%20heart%20rate%20for%20adults%20ranges%20from%2060,to%2040%20beats%20per%20minute.">[2]</a> :
                <a className="reference" href="https://www.healthline.com/health/dangerous-heart-rate#dangerous-heart-rate">[2]</a>}
          </p>

          <p>To gain more information or pursue action. Reach out to your healthcare provider for additional information.</p>
        </div>
        <Link to={`/heart-rate-results/${id}`}></Link>
      </div>
    </div>
  )
}
