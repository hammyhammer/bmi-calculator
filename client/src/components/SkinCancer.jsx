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
      <h2 className="imp-header">Skin Check</h2>
      <div className="imp-body">

        <h5>Look for any moles that have either of the following:</h5>
        <p className='moles'>
          <br />
          Moles that are asymmetrical
          <br />
          Moles with an irregular border
          <br />
          moles with an abnormal color
          <br />
          Moles with a diameter larger than a pencil's eraser
          <br />
          Moles that have moved or changed appearance
        </p>
        <div className='imp-horizontal'></div>
        <p>Have you noticed any of these? Check the box if yes.</p>
      </div>

      <FormSkinCancer input={input}
        handleSubmit={handleSubmit}
        handleCheckbox={handleCheckbox}
        type={"Submit"}
      />
    </div>
  )
}
