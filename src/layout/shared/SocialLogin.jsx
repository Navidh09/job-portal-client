import React from "react";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleLogin()
      .then(() => {
        navigate("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign In Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="flex w-full flex-col">
      <div className="divider">OR</div>
      <button
        onClick={handleGoogleSignIn}
        className="btn rounded-box flex gap-3 h-14 place-items-center"
      >
        Sign Up with Google <FcGoogle className="text-xl" />
      </button>
    </div>
  );
};

export default SocialLogin;
