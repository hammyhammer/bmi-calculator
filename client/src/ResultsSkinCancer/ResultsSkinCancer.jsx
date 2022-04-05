import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from "../services/apiConfig";
import skinresultscss from './ResultsSkinCancer.module.css'

export default function ResultsSkinCancer() {
  const [sum, setSum] = useState({});
  const { id } = useParams();


  useEffect(() => {
    const fetchSum = async () => {
      const res = await api.get(`/skin/${id}`);
      setSum(res.data);
    }
    fetchSum();
    // eslint-disable-next-line
  }, []);
  // "results-metric"

  return (
    <div>
      <div>
        <h1>Skin Check Report</h1>
        <h2> {sum.fields?.newMole ? <p>Reach out to your medical provider.</p> : <p>No new moles or abnormalities at this time. </p>}
        </h2>
      </div>
      <div className="horizontal"></div>

      <div className={skinresultscss.results}>
        <div className={skinresultscss.body}>
          {sum.fields?.newMole ? <p>There is a chance that it is benign. See your dermatologist to seek further action.</p> : <p>If you find yourself outside, remember to put on sunscreen to protect yourself from UV rays.</p>}
        </div>
        <p className={skinresultscss.body}>To gain more information or pursue action, reach out to your healthcare provider for additional information.</p>
        <br />
        <Link
          to="/skin-check-info">
          <button className={skinresultscss.info_button}>Learn more about skin checks</button>
        </Link>
      </div>
    </div>
  );
};