import { useState } from 'react';
import api from '../services/apiConfig'
import FormSkinCancer from './FormSkinCancer';
import { useNavigate } from 'react-router-dom';

const default_input = {
  newMole: false,
}

export default function SkinCancer() {
  const [input, setInput] = useState(default_input);

  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = input;
    const res = await api.post("/skin", { fields })
    console.log(res.data)
    setInput(default_input)
    navigate(`/skin-check-results/${res.data.id}`)
  }

  const handleCheckbox = (event) => {
    const { id, checked } = event.target
    setInput(prevInput => ({
      ...prevInput,
      [id]: checked,
    }))
  }
  return (
    <div>
      <h2 className="header">Skin Check</h2>
      <div className='horizontal'></div>

      <div className="body">

        <h5>Check the entirely of your body looking for the following:</h5>
        <p>
          <br />
          Moles that are asymmetrical
          <br />
          Moles with an irregular border
          <br />
          Moles with an abnormal color
          <br />
          Moles with a diameter larger than a pencil's eraser
          <br />
          Moles that have moved or changed appearance
        </p>
        <br />
        <div className='horizontal'></div>
        <div>
          <p>Have you noticed any of these? Check the box if yes.</p>
        </div>
      </div>

      <FormSkinCancer input={input}
        handleSubmit={handleSubmit}
        handleCheckbox={handleCheckbox}
        type={"Submit"}
      />
    </div>
  )
}
