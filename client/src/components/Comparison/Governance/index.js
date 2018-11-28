/* eslint-disable react/prop-types */
import React from 'react';
import './index.css';

const returnFlag = flag => {
  if (flag === '1') {
    return <img className="flagImg" src="https://imgur.com/GmAnTas.png" />;
  }
  if (flag === '0') {
    return <img className="flagImg" src="https://imgur.com/cO7uPgA.png" />;
  }
  return <img className="flagImg" src="https://imgur.com/JrMn3j9.png" />;
};

const Governance = props => {
  const { arrayOfCharity } = props;
  return (
    <div className="compare-div">
      <div className="column-div">
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
        <div className="cname-div">
          {arrayOfCharity.map(charity => {
            const { name } = charity;
            return (
              <div className="name-column">
                <h3>{name}</h3>
              </div>
            );
          })}
        </div>
        <div className="columns-div">
          {arrayOfCharity.map(charity => {
            const {
              numberOfTrustees,
              trusteesBiography,
              tob,
              executiveCompensation,
              policyGeneral,
              policyWhistleblowing,
              policyHealth,
              safeGuarding,
              fundraisingPromise,
            } = charity;
            return (
              <div className="charity-column">
                <div className="column-cell">
                  {returnFlag(numberOfTrustees)}
                </div>
                <div className="column-cell">
                  {returnFlag(trusteesBiography)}
                </div>
                <div className="column-cell">{returnFlag(tob)}</div>
                <div className="column-cell">{executiveCompensation}</div>
                <div className="column-cell">{returnFlag(policyGeneral)}</div>
                <div className="column-cell">
                  {returnFlag(policyWhistleblowing)}
                </div>
                <div className="column-cell">{returnFlag(policyHealth)}</div>
                <div className="column-cell">{returnFlag(safeGuarding)}</div>
                <div className="column-cell">
                  {returnFlag(fundraisingPromise)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Governance;
