import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  badgeBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    color: '#2196f3',
    fontWeight: 'bold',
    fontSize: '16px',
    border: '2px solid #2196f3',
    boxSizing: 'border-box',
  },
}));

const BadgeComponent = ({ label }) => {
  const classes = useStyles();

  return (
    <Box className={classes.badgeBox}>
      {label}
    </Box>
  );
};

BadgeComponent.propTypes = {
  label: PropTypes.string.isRequired,
};

export default BadgeComponent;
