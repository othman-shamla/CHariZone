/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './index.css';

class Filter extends Component {
  state = {
    categoryList: [
      'Medical Research',
      'Animals',
      'Children',
      'Hospitals & Hospices',
      'Overseas Aid and Relief',
      'Education',
      'General',
      'Homelessness',
      'Disability',
      'Environment',
    ],
    fromInc: '',
    toInc: '',
    fromEx: '',
    toEx: '',
    income: false,
    expend: false,
    category: false,
    valueSelect: '',
    error: '',
  };

  handleChange = event => {
    const { target } = event;
    let values;
    if (target.type === 'checkbox') {
      values = target.checked;
    } else {
      values = target.value;
    }
    this.setState({ [target.name]: values });
  };

  handleSelect = event => {
    this.setState({ valueSelect: event.target.value });
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
      valueSelect,
      error,
    } = this.state;

    if (income || expend) {
      if (fromInc > toInc || fromEx > toEx) {
        return this.setState({ error: 'Error Input To less than Form ' });
      }
    }
    if (income && expend && category) {
      url = `/search?incfrom=${fromInc}&incto=${toInc}&exform=${fromEx}&exto=${toEx}&category='${valueSelect}'`;
    } else if (income && category) {
      url = `/search?incfrom=${fromInc}&incto=${toInc}&exform=-1&exto=-1&category='${valueSelect}'`;
    } else if (expend && category) {
      url = `/search?incfrom=-1&incto=-1&exform=${fromEx}&exto=${toEx}&category='${valueSelect}'`;
    } else if (income && expend) {
      url = `/search?incfrom=${fromInc}&incto=${toInc}&exform=${fromEx}&exto=${toEx}&category=-1`;
    } else if (income) {
      url = `/search?incfrom=${fromInc}&incto=${toInc}&exform=-1&exto=-1&category=-1`;
    } else if (expend) {
      url = `/search?incfrom=-1&incto=-1&exform=${fromEx}&exto=${toEx}&category=-1`;
    } else if (category) {
      url = `/search?incfrom=-1&incto=-1&exform=-1&exto=-1&category='${valueSelect}'`;
    } else {
      url = `/search?incfrom=-1&incto=-1&exform=-1&exto=-1&category=-1`;
    }
    const { history } = this.props;
    history.push(url);
  };

  render() {
    const { Hide } = this.props;
    const {
      categoryList,
      fromInc,
      toInc,
      fromEx,
      toEx,
      income,
      expend,
      category,
      valueSelect,
      error,
    } = this.state;

    return (
      <React.Fragment>
        <div className="cover">
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={Hide}>
                &times;
              </span>
              <h2 className="modal-desc">Filter charities By:</h2>
              <hr />
              <div className="filter">
                <div className="part1">
                  <label
                    htmlFor="income"
                    className={
                      income
                        ? 'container-modal active-check'
                        : 'container-modal'
                    }
                  >
                    Income
                    <input
                      id="income"
                      type="checkbox"
                      name="income"
                      checked={income}
                      onChange={this.handleChange}
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="numbers">
                  <label
                    htmlFor="income"
                    className={income ? ' active-check' : null}
                  >
                    From
                    <input
                      name="fromInc"
                      value={fromInc}
                      onChange={this.handleChange}
                      type="number"
                      className="from"
                      disabled={!income ? 'disabled' : ''}
                    />
                    <span className="euro1">&euro;</span>
                  </label>
                  <br />
                  <label
                    htmlFor="income"
                    className={income ? ' active-check' : null}
                  >
                    To
                    <input
                      name="toInc"
                      value={toInc}
                      onChange={this.handleChange}
                      type="number"
                      className="to"
                      disabled={!income ? 'disabled' : ''}
                    />
                    <span className="euro2">&euro;</span>
                  </label>
                </div>
              </div>

              <div className="filter">
                <div className="part2">
                  <label
                    htmlFor="expend"
                    className={
                      expend
                        ? 'container-modal active-check'
                        : 'container-modal'
                    }
                  >
                    Expenditure
                    <input
                      id="expend"
                      type="checkbox"
                      name="expend"
                      checked={expend}
                      onChange={this.handleChange}
                    />
                    <span className="checkmark" />
                  </label>
                </div>

                <div className="numbers2">
                  <label
                    htmlFor="expend"
                    className={expend ? ' active-check' : null}
                  >
                    From
                    <input
                      name="fromEx"
                      value={fromEx}
                      onChange={this.handleChange}
                      type="number"
                      className="from"
                      disabled={!expend ? 'disabled' : ''}
                    />
                    <span className="euro3">&euro;</span>
                  </label>
                  <br />
                  <label
                    htmlFor="expend"
                    className={expend ? ' active-check' : null}
                  >
                    To
                    <input
                      name="toEx"
                      value={toEx}
                      onChange={this.handleChange}
                      type="number"
                      className="to"
                      disabled={!expend ? 'disabled' : ''}
                    />
                    <span className="euro4">&euro;</span>
                  </label>
                </div>
              </div>

              <div className="filter">
                <div className="part2">
                  <label
                    htmlFor="category"
                    className={
                      category
                        ? 'container-modal active-check'
                        : 'container-modal'
                    }
                  >
                    Category
                    <input
                      id="category"
                      type="checkbox"
                      name="category"
                      checked={category}
                      onChange={this.handleChange}
                    />
                    <span className="checkmark" />
                  </label>
                </div>

                <div className="numbers2">
                  <select
                    value={valueSelect}
                    onChange={this.handleSelect}
                    name=""
                    id=""
                    className="select-catgery"
                    disabled={!category ? 'disabled' : ''}
                  >
                    <option value="0">Select catgery:</option>
                    {categoryList.map(item => (
                      <option value={item} className="opition-div">
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>{error}</div>

              <div className="button-div">
                <button
                  className="search-button"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Filter;
