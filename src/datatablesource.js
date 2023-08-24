export const userColumns = [
  { 
    field: "id", 
    headerName: "SỐ THẺ", 
    width: 150, 
  },
  // {
  //   field: "user",
  //   headerName: "User",
  //   width: 230,
  //   renderCell: (params) => {
  //     return (
  //       <div className="cellWithImg">
  //         <img className="cellImg" src={params.row.img} alt="avatar" />
  //         {params.row.username}
  //       </div>
  //     );
  //   },
  // },
  // {
  //   field: "email",
  //   headerName: "Email",
  //   width: 230,
  // },


  {
    field:"name",
    headerName: "HỌ VÀ TÊN",  
    width: 230,
  },
  {
    field:"Email",
    headerName: "Email", 
    width: 180,
  },
  {
    field: "mssv",
    headerName: "MSSV",
    width: 130,
  },
  // {
  //   field:"password",
  //   headName:"Password",
  //   width: 230,
  // },
   {
    field:"timeIn",
    headerName:"Thời gian vào",
    width: 180,
  },
  // {
  //   field:"timeOut",
  //   headerName:"Thời gian ra",
  //   width: 180,
  // },
  // {
  //   field:"time",  
  //   headerName:"Thời gian",
  //   width: 180,
  // },
  {
    field: "status",
    headerName: "TRẠNG THÁI",
    width: 130
  ,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

