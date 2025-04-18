import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from "../../assets/logo.png";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        navigate("/signIn");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign Out Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => console.log(err.message));
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/myApplications"}>My Applications</NavLink>
      </li>
      <li>
        <NavLink to={"/addJobs"}>Add Jobs</NavLink>
      </li>
      <li>
        <NavLink to={"/myPostedJobs"}>My Posted Jobs</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm gap-2 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost">
          <img src={logo} alt="" />
          <h3 className="text-3xl">Job Portal</h3>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          </>
        ) : (
          <div className="space-x-3">
            <Link to={"/register"}>Register</Link>
            <Link to={"/signIn"} className="btn">
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
