import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import BadgeComponent from './BadgeComponent';

const BadgesBox = ({ badgeLabels }) => {
  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const badgeStyle = {
    margin: '8px', // Adjust the margin as needed for more spacing
  };

  return (
    <Box
      sx={{
        border: '2px solid #2196f3', // Outline color and width
        borderRadius: '8px', // Border radius for rounded corners
        padding: '30px', // Padding inside the box
        textAlign: 'center', // Center the content within the BadgesBox
      }}
    >
      <Box display="flex" justifyContent="center">
        {/* First Column */}
        <Box style={columnStyle} padding="20px">
          {badgeLabels.slice(0, Math.ceil(badgeLabels.length / 2)).map((label, index) => (
            <BadgeComponent key={index} label={label} style={badgeStyle} />
          ))}
        </Box>

        {/* Second Column */}
        <Box style={columnStyle}>
          {badgeLabels.slice(Math.ceil(badgeLabels.length / 2)).map((label, index) => (
            <BadgeComponent key={index} label={label} style={badgeStyle} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

BadgesBox.propTypes = {
  badgeLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BadgesBox;
