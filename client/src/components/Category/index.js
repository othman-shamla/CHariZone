/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import queryString from 'query-string';

import './style.css';

import Header from '../Header';
import CharityList from './CharityList';
import CategoryDetails from './CategoryDetails';
import Footer from '../HomePage/Footer';

class Category extends Component {
  state = {
    found: false,
    data: [],
    detales: [],
  };

  capitalFirst = string =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  stringIsMore = string =>
    string.length > 160 ? `${string.slice(0, 160)} more..` : string;

  componentWillMount() {
    const { search } = this.props.location;
    const values = queryString.parse(search);
    const { category } = values;
    if (!category) {
      return this.setState({
        found: true,
      });
    }
    const str = category.split(' ')[0];
    fetch(
      `/api/v1/filter?incfrom=-1&incto=-1&exform=-1&exto=-1&category='${str}'`
    )
      .then(res => res.json())
      .then(result => {
        if (result.err) {
          this.setState({
            found: true,
          });
        }
        const data = result.data.map((x, i) => {
          const obj = {};
          obj.regno = x.regno;
          obj.id = i;
          obj.website = x.WebsiteAddress;
          obj.name = x.name;
          obj.isActive = false;
          obj.classification = x.what.join(' - ');
          obj.logo =
            'https://www.atlrewards.net/cwa-nearby-areas-portlet/images/nologo.png';
          obj.text = x.objective;
          return obj;
        });
        if (data.length === 0) {
          this.setState({
            found: true,
          });
        }

        const detales = [
          {
            id: 1,
            title: category,
            text: `Lorem ipsum dolor sit amet, donec augue porta ultricies magna,
              mus habitant amet sollicitudin, ad ante diam sed etiam tristique,
              pellentesque erat. Dui enim vel ac posuere sit eros. Mus et viverra quisque,
              maiores aliquet fusce pellentesque feugiat, ac sed, gravida est magna. Non quis,`,
          },
        ];
        this.setState({
          detales,
          data,
        });
      });
  }

  render() {
    const { data, detales, found } = this.state;

    return (
      <React.Fragment>
        <Header />
        {found ? (
          <h1 className="notFound"> No charity found here </h1>
        ) : (
          <div className="body-category">
            <div className="result-card">
              {data.map(item => (
                <CharityList
                  regno={item.regno}
                  key={item.id}
                  logo={item.logo}
                  classification={item.classification}
                  website={item.website}
                  name={this.capitalFirst(item.name)}
                  text={this.capitalFirst(this.stringIsMore(item.text))}
                />
              ))}
            </div>
            <div className="category-details">
              <CategoryDetails
                id={detales.length === 0 ? '' : detales[0].id}
                title={detales.length === 0 ? '' : detales[0].title}
                text={detales.length === 0 ? '' : detales[0].text}
              />
            </div>
            <Footer />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Category;
