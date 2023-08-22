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
import { collection, getDocs, onSnapshot, deleteDoc, doc, } from "firebase/firestore";
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


  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="tableDa">
      <div className="datatableTitle">
        <Link to="/users/new" className="link">
          Thêm Sinh Viên
        </Link>
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








//   const rows = [
//     {
//       id: 1143155,
//       product: "Acer Nitro 5",
//       img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "John Smith",
//       date: "1 March",
//       amount: 785,
//       method: "Cash on Delivery",
//       status: "Approved",
//     },
//     {
//       id: 2235235,
//       product: "Playstation 5",
//       img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "Michael Doe",
//       date: "1 March",
//       amount: 900,
//       method: "Online Payment",
//       status: "Pending",
//     },
//     {
//       id: 2342353,
//       product: "Redragon S101",
//       img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "John Smith",
//       date: "1 March",
//       amount: 35,
//       method: "Cash on Delivery",
//       status: "Pending",
//     },
//     {
//       id: 2357741,
//       product: "Razer Blade 15",
//       img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "Jane Smith",
//       date: "1 March",
//       amount: 920,
//       method: "Online",
//       status: "Approved",
//     },
//     {
//       id: 2342355,
//       product: "ASUS ROG Strix",
//       img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
//       customer: "Harold Carol",
//       date: "1 March",
//       amount: 2000,
//       method: "Online",
//       status: "Pending",
//     },
//   ];
//   return (
//     <TableContainer component={Paper} className="table">
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell className="tableCell">Tracking ID</TableCell>
//             <TableCell className="tableCell">Product</TableCell>
//             <TableCell className="tableCell">Customer</TableCell>
//             <TableCell className="tableCell">Date</TableCell>
//             <TableCell className="tableCell">Amount</TableCell>
//             <TableCell className="tableCell">Payment Method</TableCell>
//             <TableCell className="tableCell">Status</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell className="tableCell">{row.id}</TableCell>
//               <TableCell className="tableCell">
//                 <div className="cellWrapper">
//                   <img src={row.img} alt="" className="image" />
//                   {row.product}
//                 </div>
//               </TableCell>
//               <TableCell className="tableCell">{row.customer}</TableCell>
//               <TableCell className="tableCell">{row.date}</TableCell>
//               <TableCell className="tableCell">{row.amount}</TableCell>
//               <TableCell className="tableCell">{row.method}</TableCell>
//               <TableCell className="tableCell">
//                 <span className={`status ${row.status}`}>{row.status}</span>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default List;
