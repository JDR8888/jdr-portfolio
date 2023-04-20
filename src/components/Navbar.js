import React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import '../assets/css/Navbar.css';

export default function Navbar({currentPage, handlePageChange}) {
  return (
    <Tabs aria-label="tabs" defaultValue={0} className="my-tabs">
      <TabList
        variant="plain"
        sx={{
          '--List-padding': '0px',
          '--List-radius': '0px',
          '--ListItem-minHeight': '48px',
          [`& .${tabClasses.root}`]: {
            boxShadow: 'none',
            fontWeight: 'bold',
            color: 'white', // set text color to white
            backgroundColor: '#060808',
            [`&.${tabClasses.selected}::before`]: {
              content: '""',
              display: 'block',
              position: 'absolute',
              left: 'var(--ListItem-paddingLeft)', // change to `0` to stretch to the edge.
              right: 'var(--ListItem-paddingRight)', // change to `0` to stretch to the edge.
              bottom: 0,
              height: 3,
              bgcolor: 'bisque',
            },
          },
        }}
      >
        <Tab onClick={() => handlePageChange('Home')}> HOME </Tab>
        <Tab onClick={() => handlePageChange('About')}>
            ABOUT
            </Tab>
        <Tab onClick={() => handlePageChange('Projects')}>PORTFOLIO</Tab>
        <Tab onClick={() => handlePageChange('Resume')}>RESUME</Tab>
        <Tab onClick={() => handlePageChange('Contact')}>CONTACT</Tab>
      </TabList>
    </Tabs>
  );
}