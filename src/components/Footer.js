import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { makeStyles } from '@mui/styles';

const Footer = () => {
  const [value, setValue] = useState(0);

// const useStyles = makeStyles((theme) => ({
//   icon: {
//     color: theme.palette.info.main, // Set the color to the 'info' color
//   },
// }));

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Recents"
          icon={<RestoreIcon className="purple-icon" />} // Apply the custom class name for the icon
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon className="purple-icon" />} // Apply the custom class name for the icon
        />
        <BottomNavigationAction
          label="Nearby"
          icon={<LocationOnIcon className="purple-icon" />} // Apply the custom class name for the icon
        />
      </BottomNavigation>
    </Box>
  );
}

export default Footer;
