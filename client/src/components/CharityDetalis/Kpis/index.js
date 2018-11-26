/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

import BoxKpi from '../BoxKpi';
import './style.css';

const returnFlag = flag => {
  console.log('falg : ', flag);
  if (flag === '1') {
    return <img className="flagImg" src="https://imgur.com/GmAnTas.png" />
  } if (flag === '0') {
    return <img className="flagImg" src="https://imgur.com/cO7uPgA.png" />
  }
  return <img className="flagImg" src="https://imgur.com/JrMn3j9.png" />
}

const Kpis = (props) => {
  const {
    EMR,
    averageFundraising,
    Ecr,
    Currr,
    donerDependency,
    numberOfTrustees,
    executiveCompensation,
    policyHealth,
    trusteesBiography,
    policyGeneral,
    safeGuarding,
    tob,
    policyWhistleblowing,
    fundraisingPromise,
    impactReporting,
    impactResults,
    mentionOfTheory,
  } = props;

  return (<div className="kpi--tables">
    <BoxKpi name="Financial">
      <div className="kpi--row">
        <div className="kpi--column">
          <div className="kpi--item">
            <span>3YR AVERAGE EXPENSE & MANAGEMENT RATIO</span>
            <div className="progressBar">
              <CircularProgressbar
                strokeWidth="13"
                percentage={EMR.replace('%','')}
                text={EMR} />
            </div>
          </div>
          <div className="kpi--item">
            <span>3Y AVERAGE FUNDRAISING EFFECIENCY</span>
            <div className="progressBar">
              <CircularProgressbar
                strokeWidth="13"
                percentage={averageFundraising.replace('%','')}
                text={averageFundraising}
              />
            </div>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>ECR</span>
            <span>{Ecr}</span>
          </div>
          <div className="kpi--item">
            <span>CurrR</span>
            <span>{`${Currr}`.substr(0, 5)}</span>
            {/* <span>EFFICIENCY & CAPACITY RATIO
            </span>
            <span>1.9</span> */}
          </div>
          <div className="kpi--item">
            <span>Current Ratio</span>
            <span>-</span>

          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Doner Dependency</span>
            <div className="progressBar">
              <CircularProgressbar
                strokeWidth="13"
                percentage={donerDependency.replace('%','')}
                text={donerDependency}
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
            <span>{numberOfTrustees}</span>
          </div>
          <div className="kpi--item">
            <span>Executive Compensation</span>
            <span>{executiveCompensation}</span>
          </div>
          <div className="kpi--item">
            <span>Policy: Health & Safety</span>
            <span>{returnFlag(policyHealth)}</span>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Trustees Biography  </span>
            <span>{trusteesBiography}</span>
          </div>
          <div className="kpi--item">
            <span>Policy:General Data Protection Regulations</span>
            <span>{returnFlag(policyGeneral)}</span>
          </div>
          <div className="kpi--item">
            <span>Safe Guarding</span>
            <span>{returnFlag(safeGuarding)}</span>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>T: ToB</span>
            <span>{returnFlag(tob)}</span>
          </div>
          <div className="kpi--item">
            <span>Policy: Whistleblowing</span>
            <span>{returnFlag(policyWhistleblowing)}</span>
          </div>
          <div className="kpi--item">
            <span>Fundraising Promise</span>
            <span>{returnFlag(fundraisingPromise)}</span>
          </div>
        </div>
      </div>
    </BoxKpi>
    <BoxKpi name="impact">
      <div className="kpi--row">
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Impact Reporting</span>
            <span>{returnFlag(impactReporting)}</span>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Impact: Results Reporting </span>
            <span>{returnFlag(impactResults)}</span>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Mention Of Theory</span>
            <span>{returnFlag(mentionOfTheory)}</span>
          </div>
        </div>
      </div>
    </BoxKpi>
  </div>);
}

export default Kpis;
