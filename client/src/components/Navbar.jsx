import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <Link
        className="home"
        to="/">
        <button>Home</button>
      </Link>

      <Link
        className="why-bmi"
        to="/why-bmi">
        <button>Why BMI?</button>
      </Link>


    </header>

  )
}
