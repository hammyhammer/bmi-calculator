import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <Link
        to="/">
        <button className="nav-button">Home</button>
      </Link>

      <Link
        to="/bmi">
        <button className="nav-button">Body Mass Index</button>
      </Link>

      <Link
        to="/heart-rate">
        <button className="nav-button">Heart Rate</button>
      </Link>

      <button className="nav-button">Skin Check</button>
      {/* <button className="nav-button">More Resources</button> */}

    </header>

  )
}
