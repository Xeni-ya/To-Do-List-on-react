import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>\
      <Link to="/Login">Login</Link>
      <Link to="/news">News</Link>
    </div>
  );
};

export default NavBar;