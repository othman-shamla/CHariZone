/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

import BoxKpi from '../BoxKpi';
import './style.css';

const returnFlag = flag => {
  if (flag === 'positive') {
    return <img className="flagImg" src="https://imgur.com/GmAnTas.png" />
  } if (flag === 'neutral') {
    return <img className="flagImg" src="https://imgur.com/cO7uPgA.png" />
  }
  return <img className="flagImg" src="https://imgur.com/JrMn3j9.png" />
}

const Kpis = () => (
  <div className="kpi--tables">
    <BoxKpi name="Financial">
      <div className="kpi--row">
        <div className="kpi--column">
          <div className="kpi--item">
            <span>EMR</span>
            <div className="progressBar">
              <CircularProgressbar
                strokeWidth="13"
                percentage={11.3}
                text="11.3%" />
            </div>
          </div>
          <div className="kpi--item">
            <span>3Y AVERAGE FUNDRAISING EFFECIENCY</span>
            <div className="progressBar">
              <CircularProgressbar
                strokeWidth="13"
                percentage={4.3}
                text="4.3%"
              />
            </div>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>ECR</span>
            <span>1.9</span>
          </div>
          <div className="kpi--item">
            <span>CurrR</span>
            <span>-</span>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Doner Dependency</span>
            <div className="progressBar">
              <CircularProgressbar
                strokeWidth="13"
                percentage={10.1}
                text="10.1%"
              />
            </div>
          </div>
        </div>
      </div>
    </BoxKpi>
    <BoxKpi name="Governance">
      <div className="kpi--row">
        <div className="kpi--column">
          <div className="kpi--item">
            <span>NUMBER OF TRUSTEES</span>
            <span>--</span>
          </div>
          <div className="kpi--item">
            <span>Executive Compensation</span>
            <span>150-160</span>
          </div>
          <div className="kpi--item">
            <span>Policy: Health & Safety</span>
            <span>{returnFlag('neutral')}</span>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Trustees Biography</span>
            <span>yes</span>
          </div>
          <div className="kpi--item">
            <span>Policy:General Data Protection Regulations</span>
            <span>{returnFlag('neutral')}</span>
          </div>
          <div className="kpi--item">
            <span>Safe Guarding</span>
            <span>{returnFlag('neutral')}</span>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>T: ToB</span>
            <span>{returnFlag('neutral')}</span>
          </div>
          <div className="kpi--item">
            <span>Policy: Whistleblowing</span>
            <span>{returnFlag('neutral')}</span>
          </div>
          <div className="kpi--item">
            <span>Fundraising Promise</span>
            <span>{returnFlag('positive')}</span>
          </div>
        </div>
      </div>
    </BoxKpi>
    <BoxKpi name="impact">
      <div className="kpi--row">
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Impact Reporting</span>
            <span>{returnFlag('positive')}</span>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Impact: Results Reporting </span>
            <span>{returnFlag('positive')}</span>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Mention Of Theory</span>
            <span>{returnFlag('positive')}</span>
          </div>
        </div>
      </div>
    </BoxKpi>
  </div>
);
if (module.hot) {
  module.hot.accept();

}
export default Kpis;
