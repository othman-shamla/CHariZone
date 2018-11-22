import CircularProgressbar from 'react-circular-progressbar';
import React, { Component } from 'react';
import './index.css';

class Impact extends Component {
  render() {

    const percentage = 66;
    return (
      <div className="compare-div">
        <div className="column-div">
          <div className="table-logo">
            <img
              alt="table logo"
              className="table-img"
              src="https://imgur.com/NRD930M.png"
            />
            <h4>Impact</h4>
          </div>
          <div className="table-column">
            <div className="table-cell">
              <h5 className="tooltip">
                I: R
                <span className="tooltiptext">
              Impact: Results reporting
                </span>
              </h5>
            </div>
            <div className="table-cell">
              <h5 className="tooltip">
              I:I
              <span className="tooltiptext">
              Impact reporting
              </span>
              </h5>
            </div>
            <div className="table-cell">
              <h5 className="tooltip">
              I: Measure
              <span className="tooltiptext">
              Mention of Theory/ Model / measurement
              </span>
              </h5>
            </div>

          </div>
        </div>
        <div className="content-div">
          {[0, 1, 0].map(x => (
            <div className="charity-column">
              <div className="column-cell">
                {' '}
                <img src="https://imgur.com/JrMn3j9.png" />
              </div>
              <div className="column-cell">
                {' '}
                <img src="https://imgur.com/GmAnTas.png" />
              </div>
              <div className="column-cell">
                {' '}
                <img src="https://imgur.com/cO7uPgA.png" />
              </div>
              {[0, 1, 0, 0].map(x => (
                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                    percentage={percentage}
                    backgroundPadding={20}
                    text={`${percentage}%`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(215, 111, 53, ${percentage / 100})`,
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
              ))}
        
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Impact;
