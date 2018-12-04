/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

const ClassNameCompareBtn = charityNumber => {
  const arraySelect = JSON.parse(localStorage.getItem('listCharity')) || [];
  let ChangeCompareColor = 'compareBtn';
  if (arraySelect.includes(`${charityNumber}`)) {
    ChangeCompareColor += ' active';
  }
  return ChangeCompareColor;
};

const GetImgUrl = img => {
  let url = '';
  if (img === undefined) {
    url =
      'https://www.atlrewards.net/cwa-nearby-areas-portlet/images/nologo.png';
  } else {
    [{ url }] = img;
  }
  return url;
};

const Donate = history => {
  history.push('/under-construction');
};

const CharityHeader = props => {
  const {
    changeTab,
    name,
    tabs,
    ChangeCompare,
    charityNumber,
    img,
    history,
  } = props;
  return (
    <div>
      <img alt="" id="charity--img" src={GetImgUrl(img)} />
      <span id="charity--name">{name}</span>
      <div className="tabs">
        <ul>
          {['MAIN DETAILS', 'CONTACT', 'CHARITY INSIGHT'].map((x, i) => (
            <li
              onClick={() => changeTab(i + 1)}
              className={tabs === i + 1 ? 'tabActive' : ''}
            >
              {x}
            </li>
          ))}
        </ul>
        <div style={{ margin: 23 }}>
          <button
            className={ClassNameCompareBtn(charityNumber)}
            onClick={ChangeCompare}
            type="button"
          >
            add to compare
          </button>
          <button
            className="compareBtn active"
            onClick={() => Donate(history)}
            type="button"
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharityHeader;
