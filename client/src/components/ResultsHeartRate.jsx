import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from "../services/apiConfig";

export default function ResultsHeartRate() {
  const [sum, setSum] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchSum = async () => {
      const res = await api.get(`/heart/${id}`);
      setSum(res.data);
    }
    fetchSum();
  }, []);



  return (
    <div>
      <div className="met-results-top">
        <h2>Your RHR Results</h2>
        <div className="horizontal"></div>
        <br />
        <h3>Your resting heart rate is calculated to {sum.fields?.restingHeartRate}.
          <br />
          <br />
          With a resting heart rate of {sum.fields?.restingHeartRate},
          it is considered within the {sum.fields?.heartCategory} range.</h3>
      </div>
      <div className="results-metric">


        <div className="horizontal"></div>
        <div className="results-met-bottom">
          <p>{sum.fields?.heartRisks}
            {sum.fields?.heartCategory === 'Below Normal' ? <a className="reference" href="https://www.uofmhealth.org/health-library/aa107571">[1].</a> :
              sum.fields?.heartCategory === "Normal" ? <a className="reference" href="https://www.mayoclinic.org/healthy-lifestyle/fitness/expert-answers/heart-rate/faq-20057979#:~:text=A%20normal%20resting%20heart%20rate%20for%20adults%20ranges%20from%2060,to%2040%20beats%20per%20minute.">[1].</a> :
                <a className="reference" href="https://www.healthline.com/health/dangerous-heart-rate#dangerous-heart-rate">[1].</a>}
          </p>

        </div>
        <Link to={"/heart-rate-info"}>
          <button className="info-button">Click here to learn more about heart rate</button>
        </Link>
      </div>
    </div>
  );
};
