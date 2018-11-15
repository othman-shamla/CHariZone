import React, { Component } from 'react';

import './style.css';

import Header from '../Header';
import CharityList from './CharityList';
import CategoryDetails from './CategoryDetails';

class Category extends Component {
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
    detales: [
      {
        id: 1,
        title: 'Education',
        text:
          'The Department for Education is responsible for children’s services and education,' +
          'including early years, schools, higher and further education policy,' +
          'apprenticeships and wider skills in England.',
      },
    ],
  };

  capitalFirst = string =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  stringIsMore = string =>
    string.length > 175 ? `${string.slice(0, 175)} more..` : string;

  render() {
    const { data, detales } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="body-category">
          <div className="result-card">
            {data.map(item => (
              <CharityList
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
              id={detales[0].id}
              title={detales[0].title}
              text={detales[0].text}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Category;
