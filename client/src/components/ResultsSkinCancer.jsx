import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from "../services/apiConfig"

export default function ResultsSkinCancer() {
  const [sum, setSum] = useState({});
  const { id } = useParams();


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
        <h2>Skin Check Report</h2>
        {/* <h3>Your BMI is calculated to {Number.parseFloat(sum.fields?.calculationMetric).toFixed(2)}%.
          <br />
          <br />
          With a BMI of {Number.parseFloat(sum.fields?.calculationMetric).toFixed(2)}%,
          you are placed in the {sum.fields?.categoryMetric} category.</h3> */}
      </div>
      <div className="results-metric">


        <div className="horizontal"></div>

        <div className="results-met-bottom">
          {sum.fields?.newMole ? <p>Reach out to your medical provider</p> : <p>No new moles and abnormalies at this time</p>}
        </div>
        <div className="horizontal"></div>
        <br />
        <p className='body'>To gain more information or pursue action. Reach out to your healthcare provider for additional information.</p>
        <br />
        <Link
          to="/skin-check-info">
          <button className="info-button">Learn more about skin checks</button>
        </Link>
      </div>
    </div>
  )
}