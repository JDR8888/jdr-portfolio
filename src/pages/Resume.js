import React from 'react';
import { Document, Page } from 'react-pdf';
import myPDF from '../assets/2023-resume-short-jdr.pdf';

function Resume() {
  
  return (
    <div>
      {/* <Document file={myPDF}>
        <Page pageNumber={1} />
      </Document> */}
      <object width="100%" height="800" data={myPDF} type="application/pdf">   </object>

    </div>
  );
}

export default Resume;