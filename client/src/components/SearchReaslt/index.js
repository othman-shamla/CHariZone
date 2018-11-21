/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

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
    const array = [];
    fetch('/api/v1/search?q=ch')
      .then(response => response.json())
      .then(response => {
        const { data } = response;
        data.map((item, index) => {
          const object = {};
          object.id = index + 1;
          object.idChirty = item.regno;
          object.name = item.name;
          object.classification = item.What['0'];
          object.website = item.WebsiteAddress;
          object.text = item.Objective;
          object.logo =
            'https://www.atlrewards.net/cwa-nearby-areas-portlet/images/nologo.png';
          object.isActive = false;
          return array.push(object);
        });
        this.setState({ data: array });
      });
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    const { data, activeMore, count, select } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="body">
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
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default SearchReaslt;
