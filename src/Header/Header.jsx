import React, { useContext } from "react";
import Axios from "axios";
import toast from "react-hot-toast";
import { UserContext } from "../main";
import { useNavigate } from "react-router-dom";

import "./Header.styles.css";

function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // logout handler
  const logout = async () => {
    toast.remove();
    const logoutToast = toast.loading("Logging out ...", {
      style: {
        marginTop: "10px",
        marginRight: "30px",
        padding: "20px",
      },
    });

    Axios.patch(
      import.meta.env.VITE_API_URL + "/user/logout",
      {},
      { withCredentials: true }
    )
      .then((res) => {
        toast.success("Logged out Successfully", {
          id: logoutToast,
        });

        console.log(res);

        setUser({});
        localStorage.removeItem("user");

        navigate("/");
      })
      .catch((err) => {
        toast.error("Log out Failed", {
          id: logoutToast,
        });

        console.log(err);
      });
  };

  return (
    <div className="main-header">
      <h2>
        Welcome, <span>{user.username}</span>
      </h2>
      <button
        onClick={(e) => {
          e.preventDefault();
          logout();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Header;
