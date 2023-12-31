import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { Image } from "antd";
import logo from  '../single/ctu.png'
const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <h1 className="title">THÔNG TIN ADMIN</h1>
            <div className="item">
              <Image
                src={logo}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">NGUYỄN VĂN KHANH</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">nvkhanh@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Số điện thoại:</span>
                  <span className="itemValue">0123456789</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Địa chỉ: </span>
                  <span className="itemValue">
                    Phòng Lab IoTs
                  </span>
                </div>
                {/* <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue"></span>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        </div>
        {/* <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List />
        </div> */}
      </div>
    </div>
  );
};

export default Single;
