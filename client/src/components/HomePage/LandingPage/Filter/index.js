/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
    incomeList: [
      {
        key: 1,
        name: '£100k - £1m',
        from: 100000,
        to: 1000000,
      },
      {
        key: 2,
        name: '£1m - £5m',
        from: 1000000,
        to: 5000000,
      },
      {
        key: 3,
        name: '£5m - £20m',
        from: 5000000,
        to: 20000000,
      },
      {
        key: 4,
        name: '£20m',
        from: 20000000,
        to: 1000000000,
      },
    ],
    income: false,
    category: false,
    valueSelectCategory: -1,
    valueSelectIncome: '',
    from: -1,
    to: -1,
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

  handleSelectIncome = event => {
    this.setState({
      valueSelectIncome: event.target.value,
      from: event.target.value.split('-')[0],
      to: event.target.value.split('-')[1],
    });
  };

  handleSelectCategory = event => {
    this.setState({ valueSelectCategory: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let url = '';
    const {
      income,
      category,
      valueSelectCategory,
      from,
      to,
      error,
    } = this.state;

    if (income && category) {
      url = `/search?incfrom=${from}&incto=${to}&category='${valueSelectCategory}`;
    } else if (income) {
      url = `/search?incfrom=${from}&incto=${to}&category=-1`;
    } else if (category) {
      url = `/search?incfrom=-1&incto=-1&category='${valueSelectCategory}'`;
    } else {
      url = `/search?incfrom=-1&incto=-1&category=-1`;
    }
    const { history } = this.props;
    console.log(url);
    
    // history.push(url);
  };

  render() {
    const { Hide } = this.props;
    const {
      categoryList,
      incomeList,
      income,
      category,
      valueSelectCategory,
      valueSelectIncome,
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
                <div className="numbers2">
                  <select
                    value={valueSelectIncome}
                    onChange={this.handleSelectIncome}
                    name=""
                    id=""
                    className="select-catgery"
                    disabled={!income ? 'disabled' : ''}
                  >
                    <option key="0" from="0" to="0">
                      Select catgery:
                    </option>
                    {incomeList.map(item => (
                      <option
                        value={`${item.from}-${item.to}`}
                        key={item.key}
                        className="opition-div"
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
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
                    value={valueSelectCategory}
                    onChange={this.handleSelectCategory}
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
