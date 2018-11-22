import CircularProgressbar from 'react-circular-progressbar';
import React, { Component } from 'react';
import './index.css';

class HomeInfo extends Component {
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
            <h4>Home</h4>
          </div>
          <div className="table-column">
            <div className="table-cell">
              <h5 >
                latest_fye
              </h5>
            </div>
            <div className="table-cell">
              <h5 >
              income
              </h5>
            </div>
            <div className="table-cell">
              <h5>
              expend
              </h5>
            </div>

            <div className="table-cell">
              <h5 >
            submit gap months
              </h5>
            </div>


          </div>
        </div>
        <div className="content-div">

            <div className="charity-column">
              <div className="column-cell"> 3/31/2017</div>
              <div className="column-cell">159830000</div>
              <div className="column-cell">156841000</div>
                <div className="column-cell">8.5902</div>
            </div>

            <div className="charity-column">
              <div className="column-cell"> 6/30/2016</div>
              <div className="column-cell">694519</div>
              <div className="column-cell">887380</div>
                <div className="column-cell">5.7377</div>
            </div>

            <div className="charity-column">
              <div className="column-cell"> 3/31/2017</div>
              <div className="column-cell">2140953</div>
              <div className="column-cell">2627438</div>
                <div className="column-cell">6.1967</div>
            </div>


        </div>
      </div>
    );
  }
}

export default HomeInfo;
