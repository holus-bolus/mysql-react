import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className={
        "d-flex justify-content-center align-items-center bg-primary vh-100 "
      }
    >
      <div className="bg-white p-3 rounded w-50">
        <form>
          <label className={"w-100 mb-4"}>
            Email
            <input
              type="email"
              placeholder={"Enter the email"}
              className={"form-control rounded-0"}
            />
          </label>
          <label className={"w-100 mb-4"}>
            Password
            <input
              type="password"
              placeholder={"Enter the password"}
              className={"form-control rounded-0"}
            />
          </label>
          <button type={"submit"} className={"btn btn-success w-100"}>
            Log in
          </button>
          <p>Are you agree to our terms and policies?</p>
          <Link to={"/signup"} className="btn btn-default border">
            Create account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
