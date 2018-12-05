/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

import queryString from 'query-string';
import ReactLoading from 'react-loading';
import swal from 'sweetalert';
import './style.css';
import { format } from 'util';
import More from './More';
import HeaderSearch from './HeaderSearch';
import CharityCount from '../CommonComponents/CharityCount';
import Header from '../Header';
import Footer from '../HomePage/Footer';
import ResultCard from '../CommonComponents/ResultCard';

class SearchReaslt extends Component {
  state = {
    data: [],
    activeMore: false,
    isData: false,
    refresh: false,
  };

  capitalFirst = string =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  stringIsMore = (name, string) => {
    if (name.length > 28) {
      return string.length > 100 ? `${string.slice(0, 100)} more..` : string;
    }
    return string.length > 130 ? `${string.slice(0, 130)} more..` : string;
  };

  handleFromat = (value, str, number) =>
    value === str ? value : `${value} / ${number}`;

  changeActive = (id, idChirty) => {
    const { data, refresh } = this.state;
    const arraySelect = JSON.parse(localStorage.getItem('listCharity')) || [];
    const charitylist = arraySelect.filter(charity => charity !== idChirty);
    if (charitylist.length === arraySelect.length) {
      charitylist.push(idChirty);
    }
    const count = charitylist.length;
    const charities = data.map(charity => {
      if (id === charity.id && (charity.isActive || count <= 3)) {
        charity.isActive = !charity.isActive;
      }
      return charity;
    });
    if (charitylist.length <= 3) {
      localStorage.setItem('listCharity', JSON.stringify(charitylist));
      this.setState({
        data: charities,
        refresh: !refresh,
      });
    }
  };

  specificٍSize = array => array.length > 3;

  getAllData = () => {
    this.setState({ activeMore: true });
  };

  getData = listCharity => {
    const {
      location: { search },
    } = this.props;
    const values = queryString.parse(search);
    let url = '';
    const { category, incfrom, incto, keyword } = values;
    if (category) {
      url = `/api/v1/filter?incfrom=${incfrom}&incto=${incto}&category=${category}`;
    } else {
      url = `/api/v1/search?q=${keyword}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(response => {
        const { data, error } = response;
        if (error) {
          this.setState({ isData: true });
          return;
        }
        let array = data.map((item, index) => {
          const object = {};
          object.id = index + 1;
          object.idChirty = item.regno;
          object.name = item.name;
          object.governance = item.Governance;
          object.financial = item.Financial;
          object.impact = item.Impact;
          object.classification = item.what['0'];
          object.text = item.objective;
          if (item.img) {
            object.logo = item.img[0].url;
          } else {
            object.logo =
              'https://www.atlrewards.net/cwa-nearby-areas-portlet/images/nologo.png';
          }
          object.isActive = false;
          if (listCharity.includes(item.regno)) {
            object.isActive = true;
          }
          return object;
        });
        if (keyword) {
          array = array.reduce((arr, item) => {
            if (item.name.includes(keyword.toUpperCase())) {
              arr.unshift(item);
              return arr;
            }
            arr.push(item);
            return arr;
          }, []);
        }

        this.setState({
          data: array,
          isData: true,
        });
      })
      .catch(err => {
        swal('Oops!', 'Something went wrong!', 'error');
      });
  };

  componentWillMount = () => {
    const listCharity = JSON.parse(localStorage.getItem('listCharity')) || [];
    this.getData(listCharity);
  };

  render() {
    const { data, activeMore, isData, refresh } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="body">
          {!isData ? (
            <div className="loading-bubbles">
              <ReactLoading
                type="bubbles"
                color="#0067dd"
                height="20%"
                width="20%"
              />
            </div>
          ) : (
            <>
              <HeaderSearch numberOfResult={data.length} />
              <CharityCount refresh={refresh} />
              <div className="result-cards">
                {data.slice(0, 3).map(item => {
                  const {
                    idChirty,
                    id,
                    isActive,
                    logo,
                    name,
                    text,
                    governance,
                    impact,
                    financial,
                  } = item;
                  return (
                    <ResultCard
                      idChirty={idChirty}
                      key0={id}
                      isActive={isActive}
                      onClick={() => this.changeActive(id, idChirty)}
                      logo={logo}
                      name={this.capitalFirst(name)}
                      text={this.capitalFirst(this.stringIsMore(name, text))}
                      financial={this.handleFromat(financial, '#DIV/0!', 6)}
                      governance={this.handleFromat(governance, ' -   ', 8)}
                      impact={this.handleFromat(impact, ' -   ', 3)}
                    />
                  );
                })}
              </div>
              {!activeMore && (
                <More
                  specificٍSize={this.specificٍSize(data)}
                  getAllData={() => this.getAllData()}
                />
              )}
              {activeMore &&
                data
                  .slice(3, data.length)
                  .map(item => (
                    <ResultCard
                      idChirty={item.idChirty}
                      key0={item.id}
                      isActive={item.isActive}
                      onClick={() => this.changeActive(item.id, item.idChirty)}
                      logo={item.logo}
                      name={this.capitalFirst(item.name)}
                      text={this.capitalFirst(
                        this.stringIsMore(item.name, item.text)
                      )}
                      financial={this.handleFromat(
                        item.financial,
                        '#DIV/0!',
                        6
                      )}
                      governance={this.handleFromat(
                        item.governance,
                        ' -   ',
                        8
                      )}
                      impact={this.handleFromat(item.impact, ' -   ', 3)}
                    />
                  ))}
            </>
          )}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default SearchReaslt;
