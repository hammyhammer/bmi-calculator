import api from '../services/apiConfig';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormMetric from './FormMetric'
// trying Params
const default_input = {
  weight: 0,
  height: 0,
}

export default function MetricSystem() {
  const [input, setInput] = useState(default_input);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = input;
    const res = await api.post("", { fields })
    console.log(res.data)
    setInput(default_input)
    navigate(`/results/${res.data.id}`)
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
      <FormMetric input={input}
        handleSubmit={handleSubmit}
        handleMetricInput={handleMetricInput}
        type={"Submit"}
      />
    </div>
  )
}
