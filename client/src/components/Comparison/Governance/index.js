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
              Number of Trustees
              <span className="tooltiptext">
                NUMBER OF TRUSTEES recommend under 15 trustees and over 2
                trustees
              </span>
            </h5>
          </div>
          <div className="table-cell">
            <h5>Trustees Biography</h5>
          </div>
          <div className="table-cell">
            <h5>Tearm on Board</h5>
          </div>
          <div className="table-cell">
            <h5>ECR</h5>
          </div>
          <div className="table-cell">
            <h5>Compliance with GDPR</h5>
          </div>
          <div className="table-cell">
            <h5>Whistleblowing</h5>
          </div>
          <div className="table-cell">
            <h5>Health & Safety</h5>
          </div>
          <div className="table-cell">
            <h5>Saveguarding policy</h5>
          </div>
          <div className="table-cell">
            <h5>Fundraising Promise</h5>
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
        <div className="cLogo-div">
          <img
            className="charity-logo"
            src="https://files.gitter.im/othman-shamla/dbdB/image.png"
          />
          <img
            className="charity-logo"
            src="https://files.gitter.im/othman-shamla/dbdB/image.png"
          />
          <img
            className="charity-logo"
            src="https://files.gitter.im/othman-shamla/dbdB/image.png"
          />
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
        <div className="donate-buttons">
        <button className="donate-b">Donate</button>
        <button className="donate-b">Donate</button>
        <button className="donate-b">Donate</button>
        </div>
      </div>
    </div>
  );
};
export default Governance;
