import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <Link
        to="/">
        <button className="nav-button">Home</button>
      </Link>

      <button className="nav-button">My Results</button>

      <button className="nav-button">More Resources</button>

    </header >

  );
};
