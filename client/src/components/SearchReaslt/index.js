/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

import './style.css';
import CardResult from './CardResult';
import More from './More';
import HeaderSearch from './HeaderSearch';
import Header from '../Header';
import Footer from '../Footer';

class SearchReaslt extends Component {
  state = {
    data: [
      {
        id: 1,
        name: 'HAPPY DAYS CHILDRENS CHARITY',
        isActive: false,
        classification: 'Education - Training',
        website: 'www.standby.me',
        logo:
          'https://www.atlrewards.net/cwa-nearby-areas-portlet/images/nologo.png',
        text:
          'TO HELP AND EDUCATE YOUNG PERSONS THROUGH THEIR LEISURE-TIME AND HOLIDAY ACTIVITIES',
      },
      {
        id: 2,
        name: 'ACTION FOR CHILDREN',
        isActive: false,
        classification: 'Education - Training',
        website: 'www.standby.me',
        logo:
          'https://www.atlrewards.net/cwa-nearby-areas-portlet/images/nologo.png',
        text:
          'THE CHARITY WORKS FOR THE PUBLIC BENEFIT HAVING AS ITS OBJECTS THE PROMOTION OF THE UPBRINGING AND CARE OF CHILDREN AND YOUNG PEOPLE IN NEED FROM ALL BACKGROUNDS, CULTURES, AND FAITHS OR NONE IN PARTICULAR BY:\r\n1. PROMOTING THEIR BETTER CARE AND SAFEGUARDING THEM;\r\n2. PROVIDING ASSISTANCE TO THEM AND THEIR FAMILIES AND CARERS;\r\n3. PROMOTING THEIR HEALTH;\r\n4. PROMOTING THEIR EDUCATION AND ESTABLISHMENT IN LIFE.',
      },
      {
        id: 3,
        name: 'BECOME CHARITY',
        isActive: false,
        classification: 'Education - Training',
        website: 'www.standby.me',
        logo:
          'https://www.atlrewards.net/cwa-nearby-areas-portlet/images/nologo.png',
        text:
          'TO PROMOTE THE CARE, UPBRINGING AND ESTABLISHMENT IN LIFE OF CHILDREN AND YOUNG PEOPLE WHO ARE OR HAVE BEEN LOOKED AFTER OR ASSISTED BY LOCAL AUTHORITIES OR OTHER PUBLIC OR CHARITABLE BODIES CHARGED WITH THE CARE & UPBRINGING OF CHILDREN OR WHO ARE OR HAVE BEEN IN THE CARE OF FOSTER OR ADOPTIVE PARENTS.',
      },
      {
        id: 4,
        name: 'COMPASSION UK CHRISTIAN CHILD',
        isActive: false,
        classification: 'Education - Training',
        website: 'www.standby.me',
        logo:
          'https://www.atlrewards.net/cwa-nearby-areas-portlet/images/nologo.png',
        text:
          'To advance the christian faith in all or any part of the world.\rThe relief of poverty, suffering or distress amongst children.\rThe education and training of children.\rThe development of children to social and spiritual maturity.',
      },
      {
        id: 5,
        name: 'DAVID SPURDLE',
        isActive: false,
        classification: 'Education - Training',
        website: 'www.standby.me',
        logo:
          'https://www.atlrewards.net/cwa-nearby-areas-portlet/images/nologo.png',
        text:
          'We care for over 3,000 kids across the world but no two are the same, so we take care to understand and meet each of their individual needs, from food and healthcare, to loving parents and quality education. We help them reach their full potential, stand on their own two feet and change their futures. We?ve transformed thousands of kids? lives, and we are only just getting started.',
      },
    ],
    count: 0,
    activeMore: false,
  };

  capitalFirst = string =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  stringIsMore = string =>
    string.length > 170 ? `${string.slice(0, 170)} more..` : string;

  changeActive = id => {
    const { count, data } = this.state;
    const dataAfter = data.map(x => {
      if (id === x.id) {
        if (x.isActive || count < 3) {
          x.isActive = !x.isActive;
          if (x.isActive === true) {
            this.setState(prevState => ({ count: prevState.count + 1 }));
          } else {
            this.setState(prevState => ({ count: prevState.count - 1 }));
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

  render() {
    const { data, activeMore } = this.state;
    return (
      <React.Fragment>
        <Header />
        <HeaderSearch numberOfResult={data.length} />
        <div className="result-cards">
          {data.slice(0, 3).map(item => (
            <CardResult
              isActive={item.isActive}
              onClick={() => this.changeActive(item.id)}
              key={item.id}
              logo={item.logo}
              classification={item.classification}
              website={item.website}
              name={this.capitalFirst(item.name)}
              text={this.capitalFirst(this.stringIsMore(item.text))}
            />
          ))}
        </div>
        <More
          specificٍSize={this.specificٍSize(data)}
          getAllData={() => this.getAllData()}
        />
        {activeMore &&
          data
            .slice(3, data.length)
            .map(item => (
              <CardResult
                isActive={item.isActive}
                onClick={() => this.changeActive(item.id)}
                key={item.id}
                logo={item.logo}
                classification={item.classification}
                website={item.website}
                name={this.capitalFirst(item.name)}
                text={this.capitalFirst(this.stringIsMore(item.text))}
              />
            ))}
        <Footer />
      </React.Fragment>
    );
  }
}

export default SearchReaslt;
