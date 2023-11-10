import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Login</Link>
          </li>
          <li>
            {" "}
            <Link to={"/signup"}>Signup</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
