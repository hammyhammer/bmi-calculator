import { useState } from 'react';
import api from '../services/apiConfig'
import FormHeartRate from './FormHeartRate';
import { useNavigate } from 'react-router-dom';

const default_input = {
  recordedBeats: "",
}

export default function HeartRate() {
  const [input, setInput] = useState(default_input);

  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = input;
    const res = await api.post("/heart", { fields })
    console.log(res.data)
    setInput(default_input)
    navigate(`/heart-rate-results/${res.data.id}`)
  }

  const handleHeartInput = (event) => {
    const { id, valueAsNumber } = event.target;
    setInput(prevInput => ({
      ...prevInput,
      [id]: valueAsNumber,
    }));
  };
  return (
    <div className="heart-page">
      <h2 className="imp-header">Resting Heart Rate</h2>
      <div className="imp-body">
        <p>Please find a comfortable spot to sit in and relax for a few moments.</p>
        <br />
        <p>When you are ready, please place your index and middle finger over your radial pulse.
          Begin counting how many pulses you feel for 15 seconds. (the clock will run for 60 seconds) </p>
      </div>

      <div className='imp-horizontal'></div>
      <FormHeartRate input={input}
        handleSubmit={handleSubmit}
        handleHeartInput={handleHeartInput}
        type={"Submit"}
      />
    </div>
  )
}
