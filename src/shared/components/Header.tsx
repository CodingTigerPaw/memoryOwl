import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex bg-orange-600 w-full h-16">
      <div className=" ml-10 mt-4">
        <Link to="/">Home</Link>
      </div>
      <div className="ml-10 mt-4">
        <Link to="/memory">Start</Link>
      </div>
      <div className=" ml-10 mt-4">
        <Link to="/new">Add Memory</Link>
      </div>
      <div className=" ml-10 mt-4">
        <Link to="/all">All memories</Link>
      </div>
    </div>
  );
};

export default Header;
