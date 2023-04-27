import React from 'react';
import { Document, Page } from 'react-pdf';
import myPDF from '../assets/2023-resume-jdr-v2.pdf';

function Resume() {
  
  return (
    <div>

      <object width="100%" height="800" data={myPDF} type="application/pdf">   </object>

    </div>
  );
}

export default Resume;