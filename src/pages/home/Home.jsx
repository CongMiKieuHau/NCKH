import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/* <div className="widgets">
          <Widget type="user" />
          <Widget type="product" />
          <Widget type="order" />
          <Widget type="earning" />
        </div> */}
        <div className="charts">
          {/* <Featured /> */}
          <Chart title="THỐNG KÊ TẦN SUẤT HOẠT ĐỘNG" aspect={4 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">TRẠNG THÁI HOẠT ĐỘNG CỦA SINH VIÊN</div>
          <Table />
          <div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
