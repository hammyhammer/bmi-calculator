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
      <div className="met-results-top">
        <h2>Your BMI Results</h2>
        <h3>Your BMI is calculated to {Number.parseFloat(sum.fields?.calculationImperial).toFixed(2)}%.
          <br />
          <br />
          With a BMI of {Number.parseFloat(sum.fields?.calculationImperial).toFixed(2)}%,
          you are placed in the {sum.fields?.categoryImperial} category.</h3>
      </div>
      <div className="results-metric">


        <div className="horizontal"></div>
        <div className="results-met-bottom">
          <p>BMI is used as a screening tool. BMI is not intended to diagnose any illnesses
            <a className="reference" href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html">[1]</a>.</p>
          <p>{sum.fields?.riskCategory}
            {sum.fields?.categoryImperial === 'Underweight' ? <a className="reference" href="https://www.healthline.com/health/underweight-health-risks#malnutrition">[2].</a> :
              sum.fields?.categoryImperial === "Normal" ? <a className="reference" href="https://www.aicr.org/resources/blog/a-normal-bmi-doesnt-mean-youre-healthy/">[2].</a> :
                sum.fields?.categoryImperial === "Overweight" ? <a className="reference" href="https://www.betterhealth.vic.gov.au/health/healthyliving/body-mass-index-bmi#risks-of-being-overweight-high-bmi-and-physically-inactive">[2].</a> :
                  <a className="reference" href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html#Consequences">[2].</a>}</p>
          <p>To gain more information or pursue action. Reach out to your healthcare provider for additional information.</p>


          <Link
            to="/why-bmi">
            <button className="info-button">Click here to learn more about BMI</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
