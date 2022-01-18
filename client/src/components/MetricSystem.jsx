import api from '../services/apiConfig';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormMetric from './FormMetric';

const default_input = {
  weightMetric: "",
  heightMetric: "",
};

export default function MetricSystem() {
  const [input, setInput] = useState(default_input);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = input;
    const res = await api.post("/calculator", { fields });
    setInput(default_input);
    navigate(`/metric-results/${res.data.id}`);
  }
  const handleMetricInput = (event) => {
    const { id, valueAsNumber } = event.target
    setInput(prevInput => ({
      ...prevInput,
      [id]: valueAsNumber,
    }));
  };

  return (
    <div>
      <h2 className="header">Metric System</h2>
      <div className="horizontal"></div>
      <div className="body">
        <p>Please enter the following information listed down below.</p>
        <br />
        <p>It is not necessary to enter the unit of measurement.
          The number value is all that is required.</p>
      </div>
      <div className="horizontal"></div>
      <FormMetric input={input}
        handleSubmit={handleSubmit}
        handleMetricInput={handleMetricInput}
        type={"Submit"}
      />
    </div>
  );
};
