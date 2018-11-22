/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './index.css';

class Filter extends Component {
  state = {
    fromInc: -1,
    toInc: -1,
    fromEx: -1,
    toEx: -1,
    income: false,
    expend: false,
    category: false,
  };

  handleChange = event => {
    const { target } = event;
    let value;
    if (target.type === 'checkbox') {
      value = target.checked;
    } else {
      value = target.value;
    }
    this.setState({ [target.name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let url = '';
    const {
      fromInc,
      toInc,
      fromEx,
      toEx,
      income,
      expend,
      category,
    } = this.state;
    if (income && expend && category) {
      url = `/search?incfrom=${fromInc}&incto=${toInc}&exform=${fromEx}&exto=${toEx}&category=-1`;
    } else if (income && category) {
      url = `/search?incfrom=${fromInc}&incto=${toInc}&exform=-1&exto=-1&category=-1`;
    } else if (expend && category) {
      url = `/search?incfrom=-1&incto=-1&exform=${fromEx}&exto=${toEx}&category=-1`;
    } else if (income && expend) {
      url = `/search?incfrom=${fromInc}&incto=${toInc}&exform=${fromEx}&exto=${toEx}&category=-1`;
    } else if (income) {
      url = `/search?incfrom=${fromInc}&incto=${toInc}&exform=-1&exto=-1&category=-1`;
    } else if (expend) {
      url = `/search?incfrom=-1&incto=-1&exform=${fromEx}&exto=${toEx}&category=-1`;
    } else {
      url = `/search?incfrom=-1&incto=-1&exform=-1&exto=-1&category=-1`;
    }
    // return <Link to={url} />;
  };

  render() {
    const { Hide } = this.props;
    const { fromInc, toInc, fromEx, toEx, income, expend } = this.state;
    return (
      <React.Fragment>
        <form className="modal" onSubmit={this.handleSubmit}>
          <div className="modal-content">
            <span className="close" onClick={Hide}>
              &times;
            </span>
            <p className="modal-desc">Filter charities By:</p>
            <div className="filter">
              <div className="part1">
                <label className="container-modal">
                  Income
                  <input
                    type="checkbox"
                    name="income"
                    checked={income}
                    onChange={this.handleChange}
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="numbers">
                <label htmlFor="from">
                  From
                  <input
                    name="fromInc"
                    value={fromInc}
                    onChange={this.handleChange}
                    type="number"
                    className="from"
                  />
                  <span>&euro;</span>
                </label>
                <br />
                <label htmlFor="to">
                  To
                  <input
                    name="toInc"
                    value={toInc}
                    onChange={this.handleChange}
                    type="number"
                    className="to"
                  />
                  <span>&euro;</span>
                </label>
              </div>
            </div>

            <div className="filter">
              <div className="part2">
                <label className="container-modal">
                  Expenditure
                  <input
                    type="checkbox"
                    name="expend"
                    checked={expend}
                    onChange={this.handleChange}
                  />
                  <span className="checkmark" />
                </label>
              </div>

              <div className="numbers2">
                <label htmlFor="from">
                  From
                  <input
                    name="fromEx"
                    value={fromEx}
                    onChange={this.handleChange}
                    type="number"
                    className="from"
                  />{' '}
                  <span>&euro;</span>
                </label>
                <br />
                <label htmlFor="to">
                  To
                  <input
                    name="toEx"
                    value={toEx}
                    onChange={this.handleChange}
                    type="number"
                    className="to"
                  />
                  <span>&euro;</span>
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
                  <input
                    type="checkbox"
                    name="category"
                    // checked={category}
                    onChange={this.handleChange}
                  />
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
              <button className="search-button" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Filter;
