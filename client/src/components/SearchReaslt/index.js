/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

import queryString from 'query-string';
import ReactLoading from 'react-loading';
import swal from 'sweetalert';
import './style.css';
import CardResult from './CardResult';
import More from './More';
import HeaderSearch from './HeaderSearch';
import CharityCount from './CharityCount';
import Header from '../Header';
import Footer from '../Footer';

class SearchReaslt extends Component {
  state = {
    data: [],
    count: 0,
    activeMore: false,
    select: [],
    isData: false,
  };

  capitalFirst = string =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  stringIsMore = string =>
    string.length > 100 ? `${string.slice(0, 100)} more..` : string;

  changeActive = id => {
    const index = id - 1;
    const { count, data, select } = this.state;
    const arraySelect = select;
    const dataAfter = data.map(x => {
      if (id === x.id) {
        if (x.isActive || count < 3) {
          x.isActive = !x.isActive;
          if (x.isActive === true) {
            arraySelect.push(data[index].idChirty);
            this.setState(prevState => ({
              count: prevState.count + 1,
              select: arraySelect,
            }));
          } else {
            arraySelect.splice(arraySelect.indexOf(data[index].idChirty), 1);
            this.setState(prevState => ({
              count: prevState.count - 1,
              select: arraySelect,
            }));
          }
        } else {
          return x;
        }
      }
      return x;
    });
    this.setState({ data: dataAfter });
  };

  specificٍSize = array => array.length > 3;

  getAllData = () => {
    this.setState({ activeMore: true });
  };

  getData = () => {
    const { search } = this.props.location;
    const values = queryString.parse(search);
    const array = [];
    let url = '';
    if (values.category) {
      const { category, exform, exto, incfrom, incto } = values;
      url = `/api/v1/filter?incfrom=${incfrom}&incto=${incto}&exform=${exform}&exto=${exto}&category=${category}`;
    } else {
      const { keyword } = values;
      url = `/api/v1/search?q=${keyword}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          this.setState({ isData: true });
          return;
        }
        const { data } = response;
        data.map((item, index) => {
          const object = {};
          object.id = index + 1;
          object.idChirty = item.regno;
          object.name = item.name;
          object.website = item.WebsiteAddress;
          object.classification = item.what['0'];
          object.text = item.objective;
          object.logo =
            'https://www.atlrewards.net/cwa-nearby-areas-portlet/images/nologo.png';
          object.isActive = false;
          return array.push(object);
        });
        this.setState({ data: array, isData: true });
      })
      .catch(err => {
        swal('Oops!', 'Something went wrong!', 'error');
      });
  };

  componentWillMount = () => {
    this.getData();
  };

  render() {
    const { data, activeMore, count, select, isData } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="body">
          {!isData ? (
            <div className="loading-bubbles">
              <ReactLoading
                type="bubbles"
                color="#f76009"
                height="20%"
                width="20%"
              />
            </div>
          ) : (
            <React.Fragment>
              <HeaderSearch numberOfResult={data.length} />
              <CharityCount count={count} select={select} />
              <div className="result-cards">
                {data.slice(0, 3).map(item => (
                  <CardResult
                    idChirty={item.idChirty}
                    key0={item.id}
                    isActive={item.isActive}
                    onClick={() => this.changeActive(item.id)}
                    logo={item.logo}
                    classification={item.classification}
                    website={item.website}
                    name={this.capitalFirst(item.name)}
                    text={this.capitalFirst(this.stringIsMore(item.text))}
                  />
                ))}
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
                    <CardResult
                      idChirty={item.idChirty}
                      key0={item.id}
                      isActive={item.isActive}
                      onClick={() => this.changeActive(item.id)}
                      logo={item.logo}
                      classification={item.classification}
                      website={item.website}
                      name={this.capitalFirst(item.name)}
                      text={this.capitalFirst(this.stringIsMore(item.text))}
                    />
                  ))}
            </React.Fragment>
          )}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default SearchReaslt;
