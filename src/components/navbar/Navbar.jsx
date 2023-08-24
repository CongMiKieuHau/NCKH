import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { signInWithEmailAndPassword, Auth, getAuth, signOut } from "firebase/auth";

import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"
import { useContext, useState } from "react";

const Navbar = () => {
  // const { dispatch } = useContext(DarkModeContext);
  const navitage = useNavigate()

  const { dispatch } = useContext(AuthContext)


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          {/* <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon /> */}
        </div>
        <div className="items">
          <div className="item">
            <div>
              <ExitToAppIcon className="icon"
                onClick={() => dispatch({ type: "LOGOUT" })} />
            </div>
            LOGOUT
          </div>
          {/* <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>  */}
          {/* <div className="item">
          <ExitToAppIcon className="icon" />
            
            <div className="counter">LOGOUT</div>
          </div> */}
          {/* <div className="item">
            <ListOutlinedIcon className="icon" />
          </div> */}
          <div className="item">
            <img
              src="ctu.png"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
