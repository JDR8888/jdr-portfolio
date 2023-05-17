import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GroupTwoToneIcon from '@mui/icons-material/GroupTwoTone';
import '../assets/css/Footer.css';

export default function Footer() {
  const actions = [
    { icon: <GitHubIcon className='icon' />, name: 'GitHub', link: 'https://github.com/JDR8888' }, 
    { icon: <LinkedInIcon className='icon' />, name: 'LinkedIn', link: 'https://www.linkedin.com/in/jacob-rudlong/' }, 
    { icon: <TwitterIcon className='icon' />, name: 'Twitter', link: 'https://twitter.com/jrudlong' }, 
  ];

  return (
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 10, left: 10, zIndex: 9999 }} // Update position to be at the bottom left corner of the window/view
        icon={<GroupTwoToneIcon className='icon' />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => window.open(action.link, '_blank')} 
          />
        ))}
      </SpeedDial>
  );
}
