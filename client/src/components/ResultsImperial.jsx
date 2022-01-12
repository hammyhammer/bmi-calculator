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

  // let risks = "";
  // let riskCategory = sum.fields?.calulationImperial;

  // if (riskCategory < 18.5) {
  //   risks = 'Risks associated with the underweight classification include weakened immune function, malnourishment, and osteoporosis.'
  // }
  // else if (riskCategory >= 18.5 && riskCategory <= 24.9) {
  //   risks = 'normal'
  // }
  // else if (riskCategory >= 25.0 && riskCategory <= 29.9) {
  //   risks = "risks of being overwieght"
  // }
  // else if (riskCategory >= 30.0) {
  //   risks = "risks fo being obese"
  // }

  return (
    <div>
      <h1>Your Results</h1>
      <h5>Your BMI is calculated to {Number.parseFloat(sum.fields?.calculationImperial).toFixed(2)}%. <br />
        With a BMI of {Number.parseFloat(sum.fields?.calculationImperial).toFixed(2)}%, you are placed in the {sum.fields?.categoryImperial} category.</h5>
      <p>BMI is used as a screening tool. BMI is not intended to diagnose any illnesses<a href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html">[1]</a>.</p>
      <br />
      <p>{sum.fields?.riskCategory} </p>
      <br />
      <p>Remember, BMI is a screening tool. To gain more insight, your healthcare provider can preform further assessments.</p>
      <Link to={`/imperial-results/${id}`}></Link>
    </div>
  )
}
