import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import React, { useEffect, useState } from 'react';
import { storage, db } from "../../firebase"
import { collection, getDocs, getDoc, onSnapshot, deleteDoc, doc, } from "firebase/firestore";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

const List = () => {

  // const [id, setId] = useState({});

  const [data, setData] = useState([]);
  const [status, setStatus] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      let list = [];
     
      try {


        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          
          list.push({ id: doc.id, ...doc.data() });
         
        });
        setData(list)
        console.log(list);

      } catch (err) {
        console.log(err);
      }

    }
    fetchData()
    // const unsub = onSnapshot(
    //   collection(db, "users"),
    //   (snapShot) => {
    //     let list = [];
    //     snapShot.docs.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(list);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    // return () => {
    //   unsub();
    // };

  }, []);


  // useEffect(() => {
  //   const dbRef = ref(getDatabase());
  //   get(child(dbRef, `/`)).then((snapshot) => {
  //     const var1 = snapshot.val();
  //     const var2 = var1.UsersData;
  //     const var3 = var2.CardID;
  //     setData(var3);
  //     console.log(status);
  //   }, []);

  // });
  // console.log(data);


  // const handleDelete = async (id) => {
  //   try {
  //     await deleteDoc(doc(db, "users", id));
  //     setData(data.filter((item) => item.id !== id));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const actionColumn = [
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="cellAction">
  //           <Link to="/users/test" style={{ textDecoration: "none" }}>
  //             <div className="viewButton">View</div>
  //           </Link>
  //           <div
  //             className="deleteButton"
  //             onClick={() => handleDelete(params.row.id)}
  //           >
  //             Delete
  //           </div>
  //         </div>
  //       );
  //     },
  //   },
  // ];

  return (
    <div className="tableDa">
      <div className="datatableTitle">
        
        {/* <Link to="/users/new" className="link">
          Thêm Sinh Viên
        </Link> */}
      </div>
      <div className="tableX">
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Số thẻ</TableCell>
                <TableCell className="tableCell">Họ và Tên SV</TableCell>
                <TableCell className="tableCell">MSSV</TableCell>
                <TableCell className="tableCell">Email</TableCell>
                <TableCell className="tableCell">Thời gian vào</TableCell>
                <TableCell className="tableCell">Thời gian ra</TableCell>
                <TableCell className="tableCell">Trạng thái</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.data}>
                  <TableCell className="tableCell">{row.id}</TableCell>
                  <TableCell className="tableCell">{row.name}</TableCell>
                  <TableCell className="tableCell">{row.mssv}</TableCell>
                  <TableCell className="tableCell">{row.email}</TableCell>
                  <TableCell className="tableCell">{row.timein}</TableCell>
                  <TableCell className="tableCell">{row.timeout}</TableCell>
                  {/* <TableCell className="tableCell">{}</TableCell>
                  {status.map((row) => (
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              ))} */}
              
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* <div>{status.hau}</div> */}
        </TableContainer>
      </div>
    </div>
  );

};
export default List;


