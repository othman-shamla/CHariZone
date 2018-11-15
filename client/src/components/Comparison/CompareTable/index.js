import CircularProgressbar from 'react-circular-progressbar';
import React, { Component } from 'react';
import './index.css';

class CompareTable extends Component {
  render() {
    const percentage = 66;
    return (

<div className="compare-div">
  <div className="column-div">
    <div className="table-logo">
      <img
        alt="table logo"
        className="table-img"
        src="https://imgur.com/NRD930M.png"
      />
      <h4>Governance</h4>
    </div>
    <div className="table-column">
      <div className="table-cell">
        <h5 className="tooltip">
          T:NO
          <span className="tooltiptext">
            NUMBER OF TRUSTEES recommend under 15 trustees and over 2
            trustees
          </span>
        </h5>
      </div>
      <div className="table-cell">
        <h5>T:Bio</h5>
      </div>
      <div className="table-cell">
        <h5>T:ToB</h5>
      </div>
      <div className="table-cell">
        <h5>EC</h5>
      </div>
      <div className="table-cell">
        <h5>P:GDPR</h5>
      </div>
      <div className="table-cell">
        <h5>P:W</h5>
      </div>
      <div className="table-cell">
        <h5>P:H&S</h5>
      </div>
      <div className="table-cell">
        <h5>P:SG</h5>
      </div>
      <div className="table-cell">
        <h5>P: FP</h5>
      </div>
    </div>
  </div>
  <div className="content-div">
    {[0, 1, 0].map(x => (
      <div className="charity-column">
        <div className="column-cell">
          {' '}
          <img src="https://imgur.com/JrMn3j9.png" />
        </div>
        <div className="column-cell">
          {' '}
          <img src="https://imgur.com/GmAnTas.png" />
        </div>
        <div className="column-cell">
          {' '}
          <img src="https://imgur.com/cO7uPgA.png" />
        </div>
        {[0, 1, 0, 0].map(x => (
          <div className="column-cell">
            <CircularProgressbar
              viewBox="0 0 164 180"
              percentage={percentage}
              backgroundPadding={20}
              text={`${percentage}%`}
              styles={{
                root: { width: '40px' },
                path: {
                  stroke: `rgba(215, 111, 53, ${percentage / 100})`,
                },
                text: {
                  fill: '#D76F35',
                  fontSize: '30px',
                  dominantBaseline: 'middle',
                  textAnchor: 'middle',
                  fontWeight: '700',
                },
                trail: { stroke: '#ccc' },
              }}
            />
          </div>
        ))}
        <div className="column-cell"> hi</div>
      </div>
    ))}
  </div>
</div>

)}

}
export default CompareTable;
