import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from "../services/apiConfig"

export default function ResultsImperial() {
  const [sum, setSum] = useState({})
  const { id } = useParams();
  let risks = "";

  useEffect(() => {
    const fetchSum = async () => {
      const res = await api.get(`/imperial/${id}`)
      setSum(res.data)


      let riskCategory = sum.fields?.calulationImperial;

      if (riskCategory < 18.5) {
        risks = 'Risks associated with the underweight classification include weakened immune function, malnourishment, and osteoporosis.'
      }
      else if (riskCategory >= 18.5 && riskCategory <= 24.9) {
        risks = 'normal'
      }
      else if (riskCategory >= 25.0 && riskCategory <= 29.9) {
        risks = "risks of being overwieght"
      }
      else if (riskCategory >= 30.0) {
        risks = "risks fo being obese"
      }
    }
    fetchSum();
  }, []);



  return (
    <div>
      <div className="met-results-top">
        <h2>Your Results</h2>
        <h3>Your BMI is calculated to {Number.parseFloat(sum.fields?.calculationImperial).toFixed(2)}%.
          <br />
          <br />
          With a BMI of {Number.parseFloat(sum.fields?.calculationImperial).toFixed(2)}%,
          you are placed in the {sum.fields?.categoryImperial} category.</h3>
      </div>
      <div className="results-metric">


        <div className="met-results-horizontal"></div>
        <div className="results-met-bottom">
          <p>BMI is used as a screening tool. BMI is not intended to diagnose any illnesses
            <a href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html">[1]</a>.</p>
          <p>{sum.fields?.riskCategory}</p>
          {sum.fields.categoryImperial === 'Underweight' ? <p>Citation for underweight</p> :
            sum.fields.categoryImperial === "Normal" ? <p>Citation for Normal</p> :
              sum.fields.categoryImperial === "Overweight" ? <p>Citation for Overweight</p> :
                <p>Citation for obese</p>}
          <p>To gain more information or pursue action. Reach out to your healthcare provider for additional information.</p>
        </div>
        <Link to={`/metric-results/${id}`}></Link>
      </div>
    </div>
  )
}
