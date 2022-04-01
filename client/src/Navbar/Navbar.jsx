import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <Link
        to="/">
        <button className="nav-button">Home</button>
      </Link>
      <Link to='/results'>
        <button className="nav-button">My Results</button>
      </Link>
      <Link to='/resources'>
        <button className="nav-button">More Resources</button>
      </Link>
    </header >

  );
};
