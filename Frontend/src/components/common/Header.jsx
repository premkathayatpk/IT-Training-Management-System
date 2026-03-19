import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black text-white flex justify-around">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </div>
  );
};

export default Header;
