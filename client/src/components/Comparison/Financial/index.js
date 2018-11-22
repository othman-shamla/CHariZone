import CircularProgressbar from 'react-circular-progressbar';
import React, { Component } from 'react';
import './index.css';

class Financial extends Component {
  render() {

    const percentage = -0.2;
    return (
      <div className="compare-div">
        <div className="column-div">
          <div className="table-logo">
            <img
              alt="table logo"
              className="table-img"
              src="https://imgur.com/NRD930M.png"
            />
            <h4>Financial</h4>
          </div>
          <div className="table-column">
            <div className="table-cell">
              <h5 className="tooltip">
                EMR
                <span className="tooltiptext">
                3YR AVERAGE EXPENSE & MANAGEMENT RATIO
Admin Cost Ratio = (Total Fundraising, General, and admin expense) ÷ (Total expense)
flag over 20%

                </span>
              </h5>
            </div>
            <div className="table-cell">
              <h5 className="tooltip">
              3y av FundraisI%
              <span className="tooltiptext">
              3YEAR AVERAGE FUNDRAISING EFFECIENCY :
              Vol_exp/ Vol-income
              flag over 20%
              </span>
              </h5>
            </div>
            <div className="table-cell">
              <h5 className="tooltip">
              ECR
              <span className="tooltiptext">
              EFFICIENCY & CAPACITY RATIO
  Expense Growth = (Expense(n) -Expense (n-1) ) ÷ (Total resources used(n-1))
              </span>
              </h5>
            </div>
            <div className="table-cell">
              <h5>3y avrg surplus/deficit</h5>
            </div>
            <div className="table-cell">
              <h5>Donor dependency</h5>
            </div>
            <div className="table-cell">
              <h5 className="tooltip">
              CurrR
              <span className="tooltiptext">
              Current  Ratio
  = (net current assets-/net current liability)
  healthy between 2-10
              </span>
              </h5>
            </div>

          </div>
        </div>
        <div className="content-div">

            <div className="charity-column">
                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                    percentage={11.3}
                    backgroundPadding={20}
                    text={`${11.3}%`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(215, 111, 53, ${11.3})`,
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

                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                    percentage={14.2}
                    backgroundPadding={20}
                    text={`${14.2}%`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(215, 111, 53, ${14.2})`,
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

                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                    percentage={-0.2}
                    backgroundPadding={20}
                    text={`${-0.2}%`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(215, 111, 53, ${-0.2 })`,
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

                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                    percentage={4.03}
                    backgroundPadding={20}
                    text={`${4.03}%`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(215, 111, 53, ${4.03 })`,
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

                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                    percentage={10.1}
                    backgroundPadding={20}
                    text={`${10.1}%`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(215, 111, 53, ${10.1})`,
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
              <div className="column-cell"> 1.91439726225478</div>
            </div>

            <div className="charity-column">
                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                    percentage={27.8}
                    backgroundPadding={20}
                    text={`${27.8}%`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(215, 111, 53, ${27.8})`,
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

                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                    percentage={19.5}
                    backgroundPadding={20}
                    text={`${19.5}%`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(215, 111, 53, ${19.5})`,
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

                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                    percentage={-1.3}
                    backgroundPadding={20}
                    text={`${-1.3}%`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(215, 111, 53, ${-1.3 })`,
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

                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                    percentage={-8.9}
                    backgroundPadding={20}
                    text={`${-8.9}%`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(215, 111, 53, ${-8.9 })`,
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

                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                    percentage={28.8}
                    backgroundPadding={20}
                    text={`${28.8}%`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(215, 111, 53, ${28.8})`,
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
              <div className="column-cell"> 4.6724779891121</div>
            </div>

            <div className="charity-column">
                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                    percentage={23.5}
                    backgroundPadding={20}
                    text={`${23.5}%`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(215, 111, 53, ${23.5})`,
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

                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                    percentage={17.2}
                    backgroundPadding={20}
                    text={`${17.2}%`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(215, 111, 53, ${17.2})`,
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

                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                    percentage={4.5}
                    backgroundPadding={20}
                    text={`${4.5}%`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(215, 111, 53, ${4.5 })`,
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

                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                    percentage={-1.04}
                    backgroundPadding={20}
                    text={`${-1.04}%`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(215, 111, 53, ${-1.04 })`,
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

                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                    percentage={48.2}
                    backgroundPadding={20}
                    text={`${48.2}%`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(215, 111, 53, ${48.2})`,
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
              <div className="column-cell">4.8208478</div>
            </div>



        </div>
      </div>
    );
  }
}

export default Financial;
