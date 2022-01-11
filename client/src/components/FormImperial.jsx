import React from 'react'

export default function FormImperial() {
  return (
    <div>
      <form>
        <input id="weight" value={weight} type="number" />
        <br />
        <input id="height" value={height} type="number" />
      </form>
    </div>
  )
}
