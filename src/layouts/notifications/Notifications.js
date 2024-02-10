// @mui material components
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import * as React from 'react';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Typography, Paper, Divider, Stack, Tooltip, Avatar } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { blueGrey } from "@mui/material/colors";
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { CircularProgress, OutlinedInput, InputAdornment, IconButton, DialogActions, Dialog, DialogTitle, DialogContent, Box, TextField, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import { green } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import { addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase"
import { collection, onSnapshot } from "firebase/firestore";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: "10px",
    minWidth: '500px',
    minHeight: '500px',
    overflow: 'hidden',  // Disable scrolling
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function Notifications() {
  const [data, setData] = React.useState([]);
  const [brandsModal, setBrandsModal] = React.useState(false);
  const [replyText, setReplyText] = React.useState("Dear Volunteer");
  const [notificationId, setNotificationId] = React.useState("");

  const brandsModalOpen = () => setBrandsModal(true);
  const brandsModalClose = () => setBrandsModal(false);

  const sendReply = async () => {
    try {
      if (replyText && notificationId) {
        const repliesRef = collection(db, `notifications/${notificationId}/replies`);
  
        await addDoc(repliesRef, {
          message: replyText,
          timestamp: serverTimestamp(),
        });
  
        console.log("Reply sent successfully!");
  
        // Remove the replied notification from the displayed notifications
        setData(prevData => prevData.filter(item => item.id !== notificationId));
      } else {
        console.error("Reply text or notification ID is missing.");
      }
    } catch (error) {
      console.error("Error sending reply:", error);
    } finally {
      // Close the modal after the asynchronous operation is completed
      brandsModalClose();
    }
  };
  
  React.useEffect(() => {
    const fetchData = onSnapshot(collection(db, "notifications"),
      (snapshot) => {
        const notificationList = snapshot.docs.map((items) => {
          return { id: items.id, ...items.data() }
        })
        setData(notificationList)
      },
      (error) => {
        console.log("error == ", error)
      })
    return () => {
      fetchData()
    }
  }, [])

  React.useEffect(() => {
    if (brandsModal) {
      setReplyText("Dear Volunteer, \n \n");
    }
  }, [brandsModal]);

  const sendIconClick = (notificationId) => {
    setNotificationId(notificationId);
    setBrandsModal(true);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={9} lg={12} mx={'auto'}>
              <Paper elevation={5} sx={{
                bgcolor: 'azure',
                margin: "0, auto",
                borderRadius: "1.5rem",
                width: '100%',
                p: 2
              }} >
                <Typography variant="h3" color="secondary.main" sx={{ pt: 2, textAlign: "center" }}>Inbox</Typography>
                <Divider />
                {data.map((items, index) => (
                  <React.Fragment key={index}>
                    <Paper elevation={5} sx={{ m: 2, pt: 1, borderRadius: '0.5rem', pb: 1 }}>
                      <Stack direction="row" spacing={3} sx={{ display: 'flex', alignItems: 'center', pt: 1.5, pb: 1.5, px: 1.5 }}>
                        <Typography variant="h6" color="secondary.main">{index + 1}</Typography>
                        <MDInput
                          sx={{
                            width: '90%',
                          }}
                          label="Message"
                          multiline
                          focused
                          value={items.body}
                          rows={3}
                        />
                        <Tooltip title="Send" arrow>
                          <Avatar sx={{ bgcolor: blueGrey[500], cursor: 'pointer' }} onClick={() => sendIconClick(items.id)}>
                            <SendIcon />
                          </Avatar>
                        </Tooltip>
                      </Stack>
                    </Paper>
                  </React.Fragment>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
      <BootstrapDialog
        onClose={brandsModalClose}
        aria-labelledby="customized-dialog-title"
        open={brandsModal}
      >
        <BootstrapDialogTitle onClose={brandsModalClose}>
          Reply to Message
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 2, width: "500px", height: "400px" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Reply"
              type="text"
              multiline
              rows={22}
              color="secondary"
              fullWidth
              required
              variant="outlined"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', textAlign: 'center' }}>
          <MDButton onClick={sendReply} variant="contained" color="info" overflow="hidden" justifyContent="center">
            Send Reply
          </MDButton>
        </DialogActions>
      </BootstrapDialog>
    </DashboardLayout>
  );
}

export default Notifications;
