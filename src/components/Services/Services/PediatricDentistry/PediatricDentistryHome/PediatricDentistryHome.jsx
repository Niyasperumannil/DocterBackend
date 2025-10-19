import React from 'react';
import './PediatricDentistryHome.css'; // Updated CSS file with renamed classes

const PageHeader = () => {
  return (
    <div className="page-header-container">
      <div className="page-header-title-section">
        <h1 className="page-header-title">Pediatric Dentistry


</h1>
      </div>
      <div className="page-header-breadcrumb">
        <span className="page-header-breadcrumb-home">Home</span>
        <span className="page-header-breadcrumb-separator">›</span>
        <span className="page-header-breadcrumb-current">Pediatric Dentistry

</span>
      </div>
    </div>
  );
};
    
export default PageHeader;