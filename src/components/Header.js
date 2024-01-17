import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 z-10 bg-gradient-to-b from-black flex justify-between ">
      <img
        className="w-48 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
      {user && (
        <div className="py-4 center flex">
          <img className="w-12 h-9 mx-2" alt="userIcon" src={user?.photoURL} />
          <button
            onClick={handleSignOut}
            className="bg-red-700 text-white rounded-lg w-32 h-9"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
