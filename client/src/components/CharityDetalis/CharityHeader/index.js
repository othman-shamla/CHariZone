/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

const CharityHeader = props => {
  const { changeTab, name, tabs } = props;

  return (
    <div>
      <img
        alt=""
        id="charity--img"
        src="https://files.gitter.im/othman-shamla/gvyl/image.png"
      />
      <span id="charity--name">ACTION FOR CHILDREN</span>
      <div className="tabs">
        <ul>
          {['MAIN DETAILS', 'CONTACT', 'KPIS'].map((x, i) => (
            <li
              onClick={() => changeTab(i + 1)}
              className={tabs === i + 1 ? 'tabActive' : ''}
            >
              {x}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharityHeader;
