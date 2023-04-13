import React from 'react';
import { Card as MuiCard, CardContent, Typography } from '@mui/material'; // Import card components from Material-UI

const Card = ({ title, description, image, link }) => {
  return (
    <MuiCard>
      {/* Use appropriate Material-UI card components and props to customize your card design */}
      <CardContent>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        {/* make sure link is a usable thing */}
        <Typography variant="body1">{link}</Typography>
        
      </CardContent>
      {/* Render image or other content based on your design requirements */}
      <img src={image} alt={title} width="650px" />
    </MuiCard>
  );
};

export default Card;