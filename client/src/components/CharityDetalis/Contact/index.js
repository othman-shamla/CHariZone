/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';
import 'react-circular-progressbar/dist/styles.css';

const Contact = props => {
  const {
    charityNumber,
    phoneNumber,
    faxNumber,
    email,
    website,
    address,
    areaOfOperation,
  } = props;
  return (
    <div>
      <div className="box">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <span>Charity Number</span>
              </td>
              <td>
                <span>{charityNumber}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Phone Number </span>
              </td>
              <td>
                <span>{phoneNumber}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Fax Number </span>
              </td>
              <td>
                <span>{faxNumber}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Email </span>
              </td>
              <td>
                <span>{email}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Website </span>
              </td>
              <td>
                <span>{website}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Address </span>
              </td>
              <td className="header--items">
                {address.map((x, i) => (
                  <span key={x + i}>{x}</span>
                ))}
              </td>
            </tr>
            <tr>
              <td>
                <span>Area Of Opereration </span>
              </td>
              <td className="header--items">
                {areaOfOperation.map((x, i) => (
                  <span key={x + i}>{x}</span>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
