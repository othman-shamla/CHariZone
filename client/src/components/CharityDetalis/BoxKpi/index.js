/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

const BoxKpi = props => {
  const { name, children, description } = props;
  return (
    <div className="kpi">
      <div className="kpi--box">
        <div className="kpi--titleBox">
          <span className="kpi--title">{name}</span>
          <p className="kpi--description">{description}</p>
        </div>
        <div className="kpi--children">{children}</div>
      </div>
    </div>
  );
};

export default BoxKpi;
