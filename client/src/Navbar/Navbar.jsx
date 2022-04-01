import { Link } from 'react-router-dom';
import navcss from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={navcss.header}>
      <Link
        to="/">
        <button className={navcss.nav_button}>Home</button>
      </Link>
      <Link to='/results'>
        <button className={navcss.nav_button}>My Results</button>
      </Link>
      <Link to='/resources'>
        <button className={navcss.nav_button}>More Resources</button>
      </Link>
    </header >

  );
};
