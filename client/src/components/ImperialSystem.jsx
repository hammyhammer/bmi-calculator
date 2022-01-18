import { useState } from 'react';
import api from '../services/apiConfig'
import FormImperial from './FormImperial';
import { useNavigate } from 'react-router-dom';

const default_input = {
  weightImperial: "",
  heightFeet: "",
  heightInches: "",
}

export default function ImperialSystem() {
  const [input, setInput] = useState(default_input);

  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = input;
    const res = await api.post("/imperial", { fields })
    console.log(res.data)
    setInput(default_input)
    navigate(`/imperial-results/${res.data.id}`)
  }

  const handleImperialInput = (event) => {
    const { id, valueAsNumber } = event.target;
    setInput(prevInput => ({
      ...prevInput,
      [id]: valueAsNumber,
    }));
  };
  return (
    <div>
      <h2 className="header">Imperial System</h2>
      <div className="horizontal"></div>
      <div className="body">
        <p>Please enter the following information listed down below.</p>
        <br />
        <p>It is not necessary to enter the unit of measurement.
          The prompted number value is all that is required.</p>
      </div>

      <div className='horizontal'></div>
      <FormImperial input={input}
        handleSubmit={handleSubmit}
        handleImperialInput={handleImperialInput}
        type={"Submit"}
      />
    </div>
  )
}
