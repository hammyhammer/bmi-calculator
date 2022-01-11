import { useState } from 'react';
import api from '../services/apiConfig'
import FormImperial from './FormImperial';
import { useNavigate } from 'react-router-dom';

const default_input = {
  weightImperial: 0,
  heightImperial: 0,
}

export default function ImperialSystem() {
  const [input, setInput] = useState(default_input);

  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = input;
    const res = await api.post("", { fields })
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
      <FormImperial input={input}
        handleSubmit={handleSubmit}
        handleImperialInput={handleImperialInput}
        type={"Submit"}
      />
    </div>
  )
}
