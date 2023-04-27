import React from 'react';
import { Card as MuiCard, CardContent, Typography } from '@mui/material'; // Import card components from Material-UI

const Card = ({ title, description, image, link, repo }) => {
  return (
    <MuiCard sx={{width: '100%', marginTop: '30px'}}>
      {/* Use appropriate Material-UI card components and props to customize your card design */}
      <CardContent>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        {/* make sure link is a usable thing */}
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {/* some projects may not be deployed, so use conditional to display link text only if the given project has a link value */}
          {link && ( 
            <a href={link} target="_blank" rel="noopener noreferrer">
            <Typography style={{ color: 'bisque' }}>See the Project</Typography>
          </a>
          )}
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <Typography style={{ color: 'bisque' }}>Check out the repo</Typography>
          </a>
        </div>
        
        
        
      </CardContent>
      {/* Render image or other content based on your design requirements */}
      <img src={image} alt={`demo gif of ${title}`}  />
    </MuiCard>
  );
};

export default Card;