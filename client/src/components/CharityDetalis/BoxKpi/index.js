/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

const BoxKpi = props => {
  const { name, children } = props;
  return (
    <div className="kpi">
      <span className="title--kpi">{name}</span>
      <div className="box--kpi" name="primei">
        {children}
      </div>
    </div>
  );
};

export default BoxKpi;
