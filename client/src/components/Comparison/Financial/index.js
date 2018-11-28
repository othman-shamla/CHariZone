/* eslint-disable react/prop-types */
import CircularProgressbar from 'react-circular-progressbar';
import React from 'react';
import './index.css';

const splitPercentage = x => x.split('%')[0];

const Financial = props => {
  const { arrayOfCharity } = props;

  return (
    <div className="compare-div">
      <div className="column-div">
        <div className="table-column">
          <div className="table-cell">
            <h5 className="tooltip">
              EMR
              <span className="tooltiptext">
                3YR AVERAGE EXPENSE & MANAGEMENT RATIO Admin Cost Ratio = (Total
                Fundraising, General, and admin expense) ÷ (Total expense) flag
                over 20%
              </span>
            </h5>
          </div>
          <div className="table-cell">
            <h5 className="tooltip">
              3y av FundraisI%
              <span className="tooltiptext">
                3YEAR AVERAGE FUNDRAISING EFFECIENCY : Vol_exp/ Vol-income flag
                over 20%
              </span>
            </h5>
          </div>
          <div className="table-cell">
            <h5 className="tooltip">
              ECR
              <span className="tooltiptext">
                EFFICIENCY & CAPACITY RATIO Expense Growth = (Expense(n)
                -Expense (n-1) ) ÷ (Total resources used(n-1))
              </span>
            </h5>
          </div>
          <div className="table-cell">
            <h5>Donor dependency</h5>
          </div>
          <div className="table-cell">
            <h5 className="tooltip">
              CurrR
              <span className="tooltiptext">
                Current Ratio = (net current assets-/net current liability)
                healthy between 2-10
              </span>
            </h5>
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
          )
        })}
        </div>
        <div className="columns-div">
        {arrayOfCharity.map(charity => {
          let {
            EMR,
            averageFundraising,
            Ecr,
            Currr,
            donerDependency,
          } = charity;
          EMR = splitPercentage(EMR);
          averageFundraising = splitPercentage(averageFundraising);
          Ecr = splitPercentage(Ecr);
          return (
            <div className="charity-column">
              <div className="column-cell">
                <CircularProgressbar
                  viewBox="0 0 164 180"
                  percentage={EMR}
                  backgroundPadding={20}
                  text={`${EMR}%`}
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
                  percentage={averageFundraising}
                  backgroundPadding={20}
                  text={`${averageFundraising}%`}
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
                  percentage={Ecr}
                  backgroundPadding={20}
                  text={`${Ecr}%`}
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
                <span>{donerDependency}</span>
              </div>
              <div className="column-cell">
                <span>{`${Currr}`.substr(0, 5)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Financial;
