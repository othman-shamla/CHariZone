/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

import BoxKpi from '../BoxKpi';
import './style.css';

const returnFlag = flag => {
  if (flag === 'positive') {
    return <img className="flagImg" src="https://files.gitter.im/othman-shamla/G4W7/greenFlag.jpg" />
  } else if (flag === 'neutral') {
    return <img className="flagImg" src="https://files.gitter.im/othman-shamla/G4W7/blackFlag.jpg" />
  } else {
    return <img className="flagImg" src="https://files.gitter.im/othman-shamla/G4W7/redFlag.png" />
  }
}

const Kpis = () => (
  <div className="kpi--tables">
    <BoxKpi name="Financial">
      <table>
        <tbody>
          <tr>
            <td>EMR</td>
            <td>
              <div className="progressBar">
                <CircularProgressbar
                  strokeWidth="13"
                  percentage={11.3}
                  text="11.3%"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>3Y AVERAGE FUNDRAISING EFFECIENCY</td>
            <td><CircularProgressbar
                  strokeWidth="13"
                  percentage={4.3}
                  text="4.3%"
                /></td>
          </tr>
          <tr>
            <td>Doner Dependency</td>
            <td ><CircularProgressbar
                  strokeWidth="13"
                  percentage={10.1}
                  text="10.1%"
                /></td>
          </tr>
          <tr>
            <td>ECR</td>
            <td >1.9</td>
          </tr>
          <tr>
            <td>CurrR</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </BoxKpi>
    <BoxKpi name="Governance">
      <table>
        <tbody>
          <tr>
            <td>NUMBER OF TRUSTEES</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Trustees Biography</td>
            <td>yes</td>
          </tr>
          <tr>
            <td>T: ToB</td>
            <td> {returnFlag('neutral')}</td>
          </tr>
          <tr>
            <td>Executive Compensation</td>
            <td>150-160</td>
          </tr>
          <tr>
            <td>Policy:General Data Protection Regulations</td>
            <td>{returnFlag('neutral')}</td>
          </tr>
          <tr>
            <td>Policy: Whistleblowing</td>
            <td>{returnFlag('neutral')}</td>
          </tr>
          <tr>
            <td>Policy: Health & Safety</td>
            <td>{returnFlag('neutral')}</td>
          </tr>
          <tr>
            <td>Safe Guarding</td>
            <td>{returnFlag('neutral')}</td>
          </tr>
          <tr>
            <td>Fundraising Promise</td>
            <td>{returnFlag('positive')}</td>
          </tr>
        </tbody>
      </table>
    </BoxKpi>
    <BoxKpi name="impact">
      <table>
        <tbody>
          <tr>
            <td>Impact Reporting</td>
            <td>{returnFlag('positive')}</td>
          </tr>
          <tr>
            <td>Impact: Results Reporting </td>
            <td>{returnFlag('positive')}</td>
          </tr>
          <tr>
            <td>Mention Of Theory</td>
            <td>{returnFlag('positive')}</td>
          </tr>
        </tbody>
      </table>
    </BoxKpi>
  </div>
);

export default Kpis;
