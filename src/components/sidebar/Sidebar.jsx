import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { Image } from "antd";
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        {/* <Link to="/" style={{ textDecoration: "none" }}> */}
        <Image with={200} src="ctu.png"> </Image>
        <span className="logo">NHẬT KÝ PHÒNG THÍ NGHIỆM</span>
        {/* </Link> */}
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title" style={{ fontSize: 20, color: "#333", }}>NHẬT KÝ</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span style={{ fontSize: 17, color: "#333", }}>SINH VIÊN HOẠT ĐỘNG</span>
            </li>
          </Link>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span style={{ fontSize: 17, color: "#333", }}>THỐNG KÊ</span>
            </Link>

          </li>


          {/* <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li> */}
          {/* <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
          <p className="title" style={{ fontSize: 20, color: "#333", }}>MÁY CHỦ</p>
          <li>
            <Link to="/users/uid"  style={{ textDecoration: "none" }}>
              <AccountCircleOutlinedIcon className="icon"
              />
              <span style={{ fontSize: 17, color: "#333", }}>THÔNG TIN LIÊN HỆ</span>
            </Link>
          </li>
          <li>
            <ExitToAppIcon className="icon"
              onClick={() => dispatch({ type: "LOGOUT" })}
            />
            <span style={{ fontSize: 17, color: "#333", }}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        {/* <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div> */}
      </div>
    </div>
  );
};

export default Sidebar;
