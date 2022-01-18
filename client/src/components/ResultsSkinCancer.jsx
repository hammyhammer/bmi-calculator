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
      <div className="header">
        <h2>Skin Check Report</h2>
        <h3> {sum.fields?.newMole ? <p>Reach out to your medical provider</p> : <p>No new moles or abnormalities at this time. </p>}
        </h3>
      </div>
      <div className="horizontal"></div>

      <div className="results-metric">

        <div className="body">
          {sum.fields?.newMole ? <p>There is a chance that it is benign. See your dermatologist to seek further action</p> : <p>If you find yourself outside, remember to put on sunscreen to protect yourself from UV rays.</p>}
        </div>
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