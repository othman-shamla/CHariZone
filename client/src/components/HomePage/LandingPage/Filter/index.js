import React, { Component } from 'react';
import './index.css';

class Filter extends Component {
  render() {
    const { Hide } = this.props;
    return (
      <React.Fragment>
        <div className="cover">
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={Hide}>
                &times;
              </span>
              <p className="modal-desc">Filter charities By:</p>
              <div className="filter">
                <div className="part1">
                  <label className="container-modal">
                    Income
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="numbers">
                  <label htmlFor="from">
                    From
                    <input type="number" name="from" className="from" />
                    <span className="euro1">&euro;</span>
                  </label>
                  <br />
                  <label htmlFor="to">
                    To
                    <input type="number" name="to" className="to" />
                    <span className="euro2">&euro;</span>
                  </label>
                </div>
              </div>

              <div className="filter">
                <div className="part2">
                  <label className="container-modal">
                    Expenditure
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>

                <div className="numbers2">
                  <label htmlFor="from">
                    From
                    <input type="number" name="from" className="from" />{' '}
                    <span className="euro3">&euro;</span>
                  </label>
                  <br />
                  <label htmlFor="to">
                    To
                    <input type="number" name="to" className="to" />
                    <span className="euro4">&euro;</span>
                  </label>
                </div>
              </div>

              <div className="filter">
                <div className="part2">
                  {
                    // RADIO BUTTON
                    // <label className="container-modal">
                    //   Category
                    //   <input type="radio" name="radio" />
                    //   <span className="checkmark" />
                    // </label>
                  }
                  <label className="container-modal">
                    Category
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>

                <div className="numbers2">
                  <select name="" id="" className="select-catgery">
                    <option value="0">Select catgery:</option>
                    <option value="1" className="opition-div">
                      Children
                    </option>
                    <option value="2" className="opition-div">
                      Women
                    </option>
                  </select>
                </div>
              </div>

              <div className="button-div">
                <button className="search-button"> Search</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Filter;
