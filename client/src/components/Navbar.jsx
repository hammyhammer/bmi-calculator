import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Link to="/">
        <h3>
          Home
        </h3>
      </Link>

      <Link to="/why-bmi">
        Why BMI?
      </Link>
    </div>
  )
}
