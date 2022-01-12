import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <Link to="/">
        Home
      </Link>

      <Link to="/why-bmi">
        Why BMI?
      </Link>
      <a href="https://github.com/hammyhammer">
        <img
          className="git"
          src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
          alt="Github Icon" />
      </a>
      <a href="https://www.linkedin.com/in/hampton-jacobs-a80821126/">
        <img
          className="link"
          src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
          alt="Linkedln Icon" />
      </a>
    </header>
  )
}
