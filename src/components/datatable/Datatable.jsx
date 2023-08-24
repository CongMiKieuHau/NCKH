import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
//     const fetchData = async () => {
//       let list = [];
//       // try {
//       const querySnapshot = await getDocs(collection(db, "users"));
//       querySnapshot.forEach((doc) => {
//         list.push({ id: doc.id, ...doc.data() });
//       });
//       setData(list);
        
//   console.log();
//   // } catch (err) {
//   //   console.log(err);
//   // }
// };
// fetchData();


    // LISTEN (REALTIME)

    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
         console.log(list);

      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };

  }, []);

const handleDelete = async (id) => {
  // try {
  await deleteDoc(doc(db,"users", id));
  setData(data.filter((item) => item.id !== id));

  // } catch (err) {
  //   console.log(err);
  // }
};

const actionColumn = [
  {
    field: "action",
    headerName: "XÓA SINH VIÊN",
    width: 130,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          {/* <Link to="/users/uid" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link> */}
          <div
            className="deleteButton"
            onClick={() => handleDelete(params.row.id)}
          >
            XÓA
          </div>
        </div>
      );
    },
  },
];
return (
  <div className="datatable">

    <div className="datatableTitle" style={{ fontSize: 30, color: "#333", }}>
      QUẢN LÝ SINH VIÊN
      <Link to="/users/new" className="link" >
        THÊM SINH VIÊN
      </Link>
    </div>
    <DataGrid
      className="datagrid"
      rows={data}
      columns={userColumns.concat(actionColumn)}
      pageSize={9}
      rowsPerPageOptions={[9]}
      checkboxSelection
    />
  </div>
);
};

export default Datatable;