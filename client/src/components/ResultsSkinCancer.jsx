import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import api from "../services/apiConfig"

export default function ResultsSkinCancer() {
  const [sum, setSum] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSum = async () => {
      const res = await api.get(`/skin/${id}`) //`/${id}`
      setSum(res.data)
    }
    fetchSum();
  }, []);

  return (
    <div>
      <div className="met-results-top">
        <h2>Skin Check Data</h2>
        {/* <h3>Your BMI is calculated to {Number.parseFloat(sum.fields?.calculationMetric).toFixed(2)}%.
          <br />
          <br />
          With a BMI of {Number.parseFloat(sum.fields?.calculationMetric).toFixed(2)}%,
          you are placed in the {sum.fields?.categoryMetric} category.</h3> */}
      </div>
      <div className="results-metric">


        <div className="met-results-horizontal"></div>

        <div className="results-met-bottom">
          <p>BMI is used as a screening tool. BMI is not intended to diagnose any illnesses
            <a className="reference" href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html">[1]</a>.</p>
          {sum.fields?.newMole ? navigate(`/skin-check-locations${id}`) : <p>No new moles</p>}
          <p>To gain more information or pursue action. Reach out to your healthcare provider for additional information.</p>
        </div>
      </div>
    </div>
  )
}