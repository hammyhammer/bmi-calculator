import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from "../services/apiConfig";
import metricresultscss from './ResultsMetric.module.css'

export default function ResultsPage() {
  const [sum, setSum] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchSum = async () => {
      const res = await api.get(`/calculator/${id}`);
      setSum(res.data);
    }
    fetchSum();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div>
        <h2 className={metricresultscss.header}>Your BMI Results</h2>
        <br />
        <div className="horizontal"></div>
        <h3>Your BMI is calculated to {Number.parseFloat(sum.fields?.calculationMetric).toFixed(2)}%.
          <br />
          <br />
          With a BMI of {Number.parseFloat(sum.fields?.calculationMetric).toFixed(2)}%,
          you are placed in the {sum.fields?.categoryMetric} category.</h3>
      </div>
      <div className={metricresultscss.results}>


        <div className="horizontal"></div>

        <div className={metricresultscss.body}>
          <p>BMI is used as a screening tool. BMI is not intended to diagnose any illnesses
            <a className={metricresultscss.reference} href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html" target="_blank" rel="noopener noreferrer">[1]</a>.</p>
          <p>{sum.fields?.riskCategory}
            {sum.fields?.categoryMetric === 'Underweight' ? <a className={metricresultscss.reference} href="https://www.healthline.com/health/underweight-health-risks#malnutrition" target="_blank" rel="noopener noreferrer">[2]</a> :
              sum.fields?.categoryMetric === "Normal" ? <a className={metricresultscss.reference} href="https://www.aicr.org/resources/blog/a-normal-bmi-doesnt-mean-youre-healthy/" target="_blank" rel="noopener noreferrer">[2]</a> :
                sum.fields?.categoryMetric === "Overweight" ? <a className={metricresultscss.reference} href="https://www.betterhealth.vic.gov.au/health/healthyliving/body-mass-index-bmi#risks-of-being-overweight-high-bmi-and-physically-inactive" target="_blank" rel="noopener noreferrer">[2]</a> :
                  <a className={metricresultscss.reference} href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html#Consequences" target="_blank" rel="noopener noreferrer">[2]</a>}</p>
          <p>To gain more information or pursue action. Reach out to your healthcare provider for additional information.</p>
          <Link
            to="/why-bmi">
            <button className={metricresultscss.info_button}>Click here to learn more about BMI</button>
          </Link>
        </div>
        <Link to={`/metric-results/${id}`}></Link>
      </div>
    </div>
  );
};
