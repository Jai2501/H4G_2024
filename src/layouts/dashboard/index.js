import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// ... (other imports)
import Tooltip from "@mui/material/Tooltip";
import { Link } from "@mui/material";
import Chatbot from "./Chatbot"; // Adjust the path based on your project structure
import { Chat } from "@mui/icons-material";

import rec from "../../assets/dashboard/rec.jpeg";
import com from "../../assets/dashboard/com.jpg";
import mrt from "../../assets/dashboard/MRT.jpeg";
import salad from "../../assets/dashboard/salad.avif";

import MDBox from "components/MDBox";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import exportedObject from "./data/reportsBarChartData";
import ReportsPieChart from "examples/Charts/PieCharts";
import exportedObject2 from "./data/reportsLineChartData";

const useStyles = makeStyles((theme) => ({
  h2: {
    padding: "10px",
  },

  tableHeader: {
    backgroundColor: "#709158",
    color: theme.palette.common.white,
  },
  tableRow: {
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  headerTypography: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: theme.palette.common.white,
    width: "100%",
  },
  badgeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  badgeIcon: {
    fontSize: "100vw", // Adjust the size as needed
    marginBottom: theme.spacing(1),
  },
  badgeTitle: {
    fontSize: "25px",
    textAlign: "center",
    color: "black",
  },
  tablePaper: {
    marginBottom: theme.spacing(2),
  },
  paper: {
    // Add other styles as needed
    height: "42vh", // Set the height to 40% of the viewport height
    overflowY: "auto", // Enable vertical scrolling if the content exceeds the height
  },
}));

function Dashboard() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Mock data for badges
  const badgesData = [
    {
      title: "Gold Badge",
      info: "Earn 500 points!",
      icon: (
        <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} />
      ),
    },
    {
      title: "Leaf Badge",
      info: "Complete 30 activities!",
      icon: (
        <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} />
      ),
    },
    {
      title: "Recycle Badge",
      info: "Earn 200 points!",
      icon: (
        <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} />
      ),
    },
    {
      title: "Eco Badge",
      info: "Complete 40 activities!",
      icon: (
        <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} />
      ),
    },
    {
      title: "Nature Badge",
      info: "Earn 250 points!",
      icon: (
        <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} />
      ),
    },
    {
      title: "Solar Badge",
      info: "Complete 35 activities!",
      icon: (
        <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} />
      ),
    },
    {
      title: "Ocean Badge",
      info: "Earn 300 points!",
      icon: (
        <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} />
      ),
    },
    {
      title: "Tree Badge",
      info: "Complete 45 activities!",
      icon: (
        <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} />
      ),
    },
    {
      title: "Air Badge",
      info: "Earn 350 points!",
      icon: (
        <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} />
      ),
    },
    {
      title: "Waste Badge",
      info: "Complete 20 activities!",
      icon: (
        <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} />
      ),
    },
    {
      title: "Bicycle Badge",
      info: "Earn 300 points!",
      icon: (
        <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} />
      ),
    },
    {
      title: "Compost Badge",
      info: "Complete 25 activities!",
      icon: (
        <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} />
      ),
    },
    {
      title: "Renewable Badge",
      info: "Earn 400 points!",
      icon: (
        <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} />
      ),
    },
    {
      title: "Thumb Badge",
      info: "Complete 15 activities!",
      icon: (
        <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} />
      ),
    },
    {
      title: "Wildlife Badge",
      info: "Earn 300 points!",
      icon: (
        <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} />
      ),
    },
    // Add more badge data as needed
  ];

  const [brandsData, setBrandsData] = useState([
    {
      id: 1,
      name: "Recycling Race",
      category: "Feb 10 to Mar 21",
      signups: 120,
      imageUrl: rec,
    },
    {
      id: 2,
      name: "Composting Champion!",
      category: "Feb 10 to Mar 30",
      signups: 67,
      imageUrl: com,
    },
    {
      id: 3,
      name: "Car-Free Week",
      category: "Feb 17 to Feb 24",
      signups: 85,
      imageUrl: mrt,
    },
    {
      id: 4,
      name: "Meatless Mondays",
      category: "Feb 12 to May 12",
      signups: 1,
      imageUrl: salad,
    },

    // ... (other brand data)
  ]);

  const [secondTableData, setSecondTableData] = useState([
    {
      id: 1,
      rank: 1,
      volunteer: "Shannon Tay",
      points: 4578,
      lastActivity: "2022-02-10",
      challenge: "30 Day Recycling Challenge",
    },
    {
      id: 2,
      rank: 2,
      volunteer: "Jonathan Ong",
      points: 3745,
      lastActivity: "2022-02-09",
      challenge: "Walk LA!",
    },
    {
      id: 3,
      rank: 3,
      volunteer: "Timothy Tan",
      points: 3720,
      lastActivity: "2022-02-08",
      challenge: "Car-Free Week",
    },
    {
      id: 4,
      rank: 4,
      volunteer: "Rose Mary",
      points: 3711,
      lastActivity: "2022-02-07",
      challenge: "Meatless Mondays",
    },
    {
      id: 5,
      rank: 5,
      volunteer: "Joel Tan",
      points: 3701,
      lastActivity: "2022-02-06",
      challenge: "Eco-friendly shopping",
    },
    {
      id: 6,
      rank: 6,
      volunteer: "Alberto D`Souza",
      points: 3682,
      lastActivity: "2022-02-05",
      challenge: "Reusable Revolution",
    },
    {
      id: 7,
      rank: 7,
      volunteer: "Abhishek Gupta",
      points: 3531,
      lastActivity: "2022-02-04",
      challenge: "Walk LA!",
    },
    {
      id: 8,
      rank: 8,
      volunteer: "Jane Tan",
      points: 3529,
      lastActivity: "2022-02-03",
      challenge: "Meatless Mondays",
    },
  ]);

  const [filterSignups, setFilterSignups] = useState(false);

  const toggleSignupsFilter = () => {
    setFilterSignups(!filterSignups);
  };

  // Filter and sort brandsData based on signups
  const filteredBrandsData = brandsData
    .filter((brand) => !filterSignups || brand.signups > 50)
    .sort((a, b) => (filterSignups ? b.signups - a.signups : 0));

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={3}>
        {/* First Column */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {/* First Table */}
            <Grid item xs={12}>
              <Paper
                elevation={3}
                className={`${classes.paper} ${classes.tablePaper}`}
              >
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography
                          variant="subtitle1"
                          style={{
                            fontWeight: "bold",
                            backgroundColor: "#709158",
                            color: "#ffffff",
                            paddingLeft: "10px",
                          }}
                        >
                          Campaigns
                        </Typography>
                        {/* Add a toggle button for the filter */}
                        <div
                          style={{ marginBottom: "10px", alignItems: "right" }}
                        >
                          <label>
                            <input
                              type="checkbox"
                              checked={filterSignups}
                              onChange={toggleSignupsFilter}
                            />
                            Filter by Signups
                          </label>
                        </div>
                      </TableCell>
                    </TableRow>

                    {filteredBrandsData.map((row) => (
                      <TableRow key={row.id} className={classes.tableRow}>
                        <TableCell>
                          <img
                            src={row.imageUrl}
                            style={{ width: "50px", height: "50px" }}
                          />
                        </TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.category}</TableCell>
                        <TableCell>{row.signups}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>

            {/* Second Table */}
            <Grid item xs={12}>
              <Paper
                elevation={3}
                className={`${classes.paper} ${classes.tablePaper}`}
              >
                <Table>
                  <TableRow>
                    <TableCell>
                      <Typography
                        variant="subtitle1"
                        style={{
                          fontWeight: "bold",
                          backgroundColor: "#709158",
                          color: "#ffffff",
                          paddingLeft: "10px",
                        }}
                      >
                        Leaderboard
                      </Typography>
                      {/* Add a search input for the leaderboard */}
                      <div
                        style={{ marginBottom: "10px", alignItems: "right" }}
                      >
                        <label>
                          <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Seach"
                          />
                        </label>
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Typography
                        variant="subtitle1"
                        style={{ fontWeight: "bold" }}
                      >
                        Rank
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="subtitle1"
                        style={{ fontWeight: "bold" }}
                      >
                        Name
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="subtitle1"
                        style={{ fontWeight: "bold" }}
                      >
                        Points
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="subtitle1"
                        style={{ fontWeight: "bold" }}
                      >
                        Most Recent Activity
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableBody>
                    {secondTableData
                      .filter((row) =>
                        row.volunteer
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      )
                      .map((row) => (
                        <TableRow key={row.id} className={classes.tableRow}>
                          <TableCell>{row.rank}</TableCell>
                          <TableCell>
                            <Link href={`mailto:${row.volunteer}`} color="info">
                              {row.volunteer}
                            </Link>
                          </TableCell>
                          <TableCell>{row.points}</TableCell>
                          <TableCell>{row.challenge}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {/* First Table */}
            <Grid item xs={12}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="#FFFFFF"
                  title="Post-activity behaviours over time"
                  description="Activity of volunteers since last GUI Activity"
                  date="Last Updated 2 mins ago."
                  chart={exportedObject}
                  xAxisTitle="Days since last GUI Activity"
                  yAxisTitle="No. of Posts Uploaded"
                />
              </MDBox>
            </Grid>

            {/* Second Table */}
            <Grid item xs={12}>
              <MDBox mb={3}>
                <ReportsPieChart
                  color="#FFFFFF"
                  title="Categories of Sustainable Behaviour"
                  description="Most popular post-activity categories"
                  date="Last Updated 2 mins ago."
                  chart={exportedObject2} // Make sure to adjust this prop based on your actual pie chart data
                />
              </MDBox>
            </Grid>

            <Grid item xs={12}>
              <Chatbot />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
