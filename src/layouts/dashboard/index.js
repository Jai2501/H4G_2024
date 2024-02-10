import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
// ... (other imports)
import Tooltip from '@mui/material/Tooltip';
import { Link } from '@mui/material';
import Chatbot from './Chatbot'; // Adjust the path based on your project structure
import { Chat } from '@mui/icons-material';



const useStyles = makeStyles((theme) => ({
  h2: {
    padding: '10px',
  },
  
  tableHeader: {
    backgroundColor: '#709158',
    color: theme.palette.common.white,
  },
  tableRow: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  headerTypography: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: theme.palette.common.white,
    width: '100%'
  },
  badgeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  badgeIcon: {
    fontSize: '100vw', // Adjust the size as needed
    marginBottom: theme.spacing(1),
  },
  badgeTitle: {
    fontSize: '25px',
    textAlign: 'center',
    color: 'black',
  },
  tablePaper: {
    marginBottom: theme.spacing(2),
  },
  paper: {
    // Add other styles as needed
    height: '27vh', // Set the height to 40% of the viewport height
    overflowY: 'auto', // Enable vertical scrolling if the content exceeds the height
  },
}));

function Dashboard() {
  const classes = useStyles();

  // Mock data for badges
  const badgesData = [
    { title: 'Gold Badge', info: 'Earn 500 points!', icon: <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} /> },
    { title: 'Leaf Badge', info: 'Complete 30 activities!', icon: <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} /> },
    { title: 'Recycle Badge', info: 'Earn 200 points!', icon: <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} /> },
    { title: 'Eco Badge', info: 'Complete 40 activities!', icon: <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} /> },
    { title: 'Nature Badge', info: 'Earn 250 points!', icon: <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} /> },
    { title: 'Solar Badge', info: 'Complete 35 activities!', icon: <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} /> },
    { title: 'Ocean Badge', info: 'Earn 300 points!', icon: <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} /> },
    { title: 'Tree Badge', info: 'Complete 45 activities!', icon: <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} /> },
    { title: 'Air Badge', info: 'Earn 350 points!', icon: <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} /> },
    { title: 'Waste Badge', info: 'Complete 20 activities!', icon: <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} /> },
    { title: 'Bicycle Badge', info: 'Earn 300 points!', icon: <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} /> },
    { title: 'Compost Badge', info: 'Complete 25 activities!', icon: <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} /> },
    { title: 'Renewable Badge', info: 'Earn 400 points!', icon: <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} /> },
    { title: 'Thumb Badge', info: 'Complete 15 activities!', icon: <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} /> },
    { title: 'Wildlife Badge', info: 'Earn 300 points!', icon: <EmojiEventsIcon color="success" style={{ width: 120, height: 120 }} /> },
    // Add more badge data as needed
  ];  

  const [brandsData, setBrandsData] = useState([
    { id: 1, name: '30-Day Recycling Challenge', category: 'Plastic Waste', signups: 100 },
    { id: 2, name: 'Walk LA!', category: 'Green Transportation', signups: 40 },
    { id: 3, name: 'Clean Energy Drive', category: 'Renewable Energy', signups: 80 },
    { id: 4, name: 'Ocean Cleanup Crew', category: 'Marine Conservation', signups: 120 },
    { id: 5, name: 'Eco-Friendly Commuters', category: 'Sustainable Travel', signups: 60 },
    { id: 6, name: 'Tree Planting Initiative', category: 'Afforestation', signups: 90 },
    { id: 7, name: 'Zero-Waste Warriors', category: 'Waste Reduction', signups: 75 },
    { id: 8, name: 'Bike to Work', category: 'Green Transportation', signups: 55 },
    { id: 9, name: 'Community Gardeners', category: 'Urban Farming', signups: 110 },
    { id: 10, name: 'Air Quality Advocates', category: 'Environmental Health', signups: 95 },
    { id: 11, name: 'Green Tech Innovators', category: 'Sustainable Technology', signups: 65 },
    { id: 12, name: 'Wildlife Preservation Society', category: 'Conservation', signups: 150 },
    { id: 13, name: 'Solar Power Enthusiasts', category: 'Clean Energy', signups: 85 },
    { id: 14, name: 'Carpool Champions', category: 'Shared Transportation', signups: 50 },
    { id: 15, name: 'Reduce, Reuse, Recycle Team', category: 'Waste Management', signups: 70 },
    // ... (other brand data)
  ]);
  

  const [secondTableData, setSecondTableData] = useState([
    { id: 1, rank: 1, volunteer: 'Alex Thompson', points: 340, lastActivity: '2022-02-10', challenge: '30-Day Recycling Challenge' },
    { id: 2, rank: 2, volunteer: 'Bella Robinson', points: 320, lastActivity: '2022-02-09', challenge: 'Walk LA!' },
    { id: 3, rank: 3, volunteer: 'Alice Smith', points: 300, lastActivity: '2022-02-08', challenge: '30-Day Recycling Challenge' },
    { id: 4, rank: 4, volunteer: 'Bob Johnson', points: 268, lastActivity: '2022-02-07', challenge: 'Walk LA!' },
    { id: 5, rank: 5, volunteer: 'Charlie Williams', points: 265, lastActivity: '2022-02-06', challenge: '30-Day Recycling Challenge' },
    { id: 6, rank: 6, volunteer: 'David Brown', points: 250, lastActivity: '2022-02-05', challenge: 'Walk LA!' },
    { id: 7, rank: 7, volunteer: 'Eva Wilson', points: 245, lastActivity: '2022-02-04', challenge: '30-Day Recycling Challenge' },
    { id: 8, rank: 8, volunteer: 'Frank Davis', points: 220, lastActivity: '2022-02-03', challenge: 'Walk LA!' },
    { id: 9, rank: 9, volunteer: 'Grace Miller', points: 219, lastActivity: '2022-02-02', challenge: '30-Day Recycling Challenge' },
    { id: 10, rank: 10, volunteer: 'Henry Moore', points: 210, lastActivity: '2022-02-01', challenge: 'Walk LA!' },
    { id: 11, rank: 11, volunteer: 'Isabel Wilson', points: 190, lastActivity: '2022-01-31', challenge: '30-Day Recycling Challenge' },
    { id: 12, rank: 12, volunteer: 'Jack Taylor', points: 180, lastActivity: '2022-01-30', challenge: 'Walk LA!' },
    { id: 13, rank: 13, volunteer: 'Katherine Evans', points: 150, lastActivity: '2022-01-29', challenge: '30-Day Recycling Challenge' },
    { id: 14, rank: 14, volunteer: 'Liam Scott', points: 145, lastActivity: '2022-01-28', challenge: 'Walk LA!' },
    { id: 15, rank: 15, volunteer: 'Mia Johnson', points: 144, lastActivity: '2022-01-27', challenge: '30-Day Recycling Challenge' },
    { id: 16, rank: 16, volunteer: 'Noah Davis', points: 120, lastActivity: '2022-01-26', challenge: 'Walk LA!' },
    { id: 17, rank: 17, volunteer: 'Olivia Clark', points: 98, lastActivity: '2022-01-25', challenge: '30-Day Recycling Challenge' },
    { id: 18, rank: 18, volunteer: 'Peter White', points: 91, lastActivity: '2022-01-24', challenge: 'Walk LA!' },
    { id: 19, rank: 19, volunteer: 'Quinn Martin', points: 94, lastActivity: '2022-01-23', challenge: '30-Day Recycling Challenge' },
    { id: 20, rank: 20, volunteer: 'Rose Taylor', points: 86, lastActivity: '2022-01-22', challenge: 'Walk LA!' },
  ]);

  const [filterSignups, setFilterSignups] = useState(false);

  const toggleSignupsFilter = () => {
    setFilterSignups(!filterSignups);
  };

  // Filter and sort brandsData based on signups
  const filteredBrandsData = brandsData
    .filter((brand) => (!filterSignups || brand.signups > 50))
    .sort((a, b) => (filterSignups ? b.signups - a.signups : 0));
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={3}>
        {/* First Column */}
        <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          <Typography variant="h4" className={classes.h2}>
            Available Badges
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxHeight: '80vh', overflowY: 'auto' }}>
            {badgesData.map((badge, index) => (
              <Tooltip title={badge.info} key={index}>
                <div className={classes.badgeContainer}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    {badge.icon}
                    <Typography className={classes.badgeTitle}>
                      {badge.title}
                    </Typography>
                  </div>
                </div>
              </Tooltip>
            ))}
          </div>
        </Grid>

         {/* Second Column */}
         <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {/* First Table */}
            <Grid item xs={12}>
              <Paper elevation={3} className={`${classes.paper} ${classes.tablePaper}`}>
                <Table>
                  <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle1" style={{ fontWeight: 'bold', backgroundColor: '#709158' , color:'#ffffff', paddingLeft:'10px'}}>
                        Active Challenges
                      </Typography>
                      {/* Add a toggle button for the filter */}
                        <div style={{ marginBottom: '10px' }}>
                          <label>
                            <input type="checkbox" checked={filterSignups} onChange={toggleSignupsFilter} />
                            Filter by Signups
                          </label>
                        </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                        Name
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                        Category
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                        Signups
                      </Typography>
                    </TableCell>
                  </TableRow>

                  {filteredBrandsData.map((row) => (
                      <TableRow key={row.id} className={classes.tableRow}>
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
              <Paper elevation={3} className={`${classes.paper} ${classes.tablePaper}`}>
                <Table>
                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle1" style={{ fontWeight: 'bold', backgroundColor: '#709158' , color:'#ffffff', paddingLeft:'10px'}}>
                        Leaderboard
                      </Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                        Rank
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                        Volunteer
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                        Points
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                        Last Activity
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableBody>
                    {secondTableData.map((row) => (
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
          <Grid item xs={12}>
          <Chatbot />
        </Grid>
        </Grid>
      </Grid>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;