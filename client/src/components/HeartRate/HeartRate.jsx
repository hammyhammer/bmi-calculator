import { useState } from 'react';
import api from '../../services/apiConfig'
import FormHeartRate from '../FormHeartRate/FormHeartRate';
import { useNavigate } from 'react-router-dom';
import Timer from '../../Timer/Timer';

const default_input = {
  recordedBeats: "",
};

export default function HeartRate() {
  const [input, setInput] = useState(default_input);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = input;
    const res = await api.post("/heart", { fields });
    setInput(default_input);
    navigate(`/heart-rate-results/${res.data.id}`);
  };

  const handleHeartInput = (event) => {
    const { id, valueAsNumber } = event.target;
    setInput(prevInput => ({
      ...prevInput,
      [id]: valueAsNumber,
    }));
  };
  return (
    <div className="heart-page">
      <h2 className="header">Resting Heart Rate</h2>
      <div className="horizontal"></div>
      <div className="body">
        <p>Please find a comfortable spot to sit in and relax for a few minutes.</p>
        <p>When you are ready, place your index and middle finger over your radial pulse. <br />
          Begin counting how many pulses you feel for 15 seconds. </p>
      </div>

      <div className='horizontal'></div>
      <FormHeartRate input={input}
        handleSubmit={handleSubmit}
        handleHeartInput={handleHeartInput}
        type={"Submit"}
      />
      <Timer />
      <div className="heart-image">
        <img
          style={{ width: "220px" }}
          src="https://cdn-prod.medicalnewstoday.com/content/images/articles/282/282760/two-fingers-feeling-for-radial-pulse.jpg"
          alt="Person demonstrating how to feel their radial pulse" />
      </div>
    </div>
  );
};
