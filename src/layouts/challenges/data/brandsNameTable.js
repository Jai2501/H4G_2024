// Amdin panel React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";
import { Link } from "react-router-dom";
import * as React from "react"

//firestore
import { db } from "../.../../../../firebase"
import { collection, onSnapshot } from "firebase/firestore";

function Data() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    const fetchData = onSnapshot(collection(db, "brands"),
      (snapshot) => {
        const brandList = snapshot.docs.map((items) => {
          return { id: items.id, ...items.data() }
        })
        setData(brandList)
      },
      (error) => {
        console.log("error == ", error)
      })
    return () => {
      fetchData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateParticipants = (id, newParticipants) => {
    setData((prevData) => {
      const updatedData = prevData.map((item) =>
        item.id === id ? { ...item, participants: newParticipants } : item
      );
      return updatedData;
    });
  };

  const SR_NO = ({ srNo }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography variant="body2" fontWeight="small">
          {srNo}
        </MDTypography>
      </MDBox>
    </MDBox>
  );
  const BRAND_NAME = ({ id, name, image, participants }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium" sx={{ textTransform: 'capitalize' }}>
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return {
    columns: [
      { Header: "SR NO#", accessor: "srNo", width: '10%', align: "left" },
      { Header: "Name", accessor: "brands", align: "left" },
      { Header: "Signups", accessor: "participants", align: "left" },
      { Header: "Action", accessor: "action", align: "right" }
    ],
    rows: [...data.map((items, index) => {
      return ({
        srNo: <SR_NO srNo={index + 1} />,
        brands: <BRAND_NAME id={items.id} image={items.logo} name={items.name} participants={items.participants} />,
        participants: getRandomInt(50, 100),
        action: <Link to={`/admin/brands/detail/${items.id}`}><MDButton variant="gradient" color="info" size="small">Detail</MDButton></Link>,
      });
    })],
  };
}

export default Data;