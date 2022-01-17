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
        <p>Have you noticed any new moles, or different movements?</p>
        <br />
        <p></p>
      </div>

      <div className='imp-horizontal'></div>
      <FormSkinCancer input={input}
        handleSubmit={handleSubmit}
        handleCheckbox={handleCheckbox}
        type={"Submit"}
      />
    </div>
  )
}
