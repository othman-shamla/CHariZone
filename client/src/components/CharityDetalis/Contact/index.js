/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';
import 'react-circular-progressbar/dist/styles.css';

const areaOfOperationRow = areaOfOperation => {
  const halfLength = Math.floor(areaOfOperation.length / 2);
  let areaOfOperationColumnOne = areaOfOperation;
  let areaOfOperationColumnTwo = [];
  if (areaOfOperation.length > 6) {
    areaOfOperationColumnOne = areaOfOperation.slice(0, halfLength);
    areaOfOperationColumnTwo = areaOfOperation.slice(
      halfLength,
      areaOfOperation.length
    );
  }
  return (
    <>
      <div className="header--items">
        {areaOfOperationColumnOne.map((x, i) => (
          <span key={x + i}>{x}</span>
        ))}
      </div>
      <div className="header--items">
        {areaOfOperationColumnTwo.map((x, i) => (
          <span key={x + i}>{x}</span>
        ))}
      </div>
    </>
  );
};

const Contact = props => {
  const {
    charityNumber,
    phoneNumber,
    email,
    website,
    address,
    areaOfOperation,
  } = props;
  return (
    <div>
      <div className="mainDetails">
        <table>
          <tbody>
            <tr>
              <td>
                <span className="header">Charity Number</span>
              </td>
              <td className="header--items">
                <span>{charityNumber}</span>
              </td>
              <td className="header--items" />
            </tr>
            <tr>
              <td>
                <span className="header">Phone Number </span>
              </td>
              <td className="header--items">
                <span>{phoneNumber}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="header">Email </span>
              </td>
              <td className="header--items">
                <span>{email}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="header">Website </span>
              </td>
              <td className="header--items">
                <span>
                  <a href="{website}">{website}</a>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="header">Address </span>
              </td>
              <td className="header--items">
                {address.map((x, i) => (
                  <span key={x + i}>{x}</span>
                ))}
              </td>
            </tr>
            <tr>
              <td>
                <span className="header">Area Of Opereration </span>
              </td>
              <td className="header--row">
                {areaOfOperationRow(areaOfOperation)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
