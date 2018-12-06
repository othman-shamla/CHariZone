/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import queryString from 'query-string';
import ReactLoading from 'react-loading';
import swal from 'sweetalert';
import './style.css';
import More from '../SearchReaslt/More';
import HeaderCategory from './HeaderCategory';
import CategoryDetails from './CategoryDetails';
import CharityCount from '../CommonComponents/CharityCount';
import Header from '../Header';
import Footer from '../HomePage/Footer';
import ResultCard from '../CommonComponents/ResultCard';

class Category extends Component {
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

  handleFromat = (valueStr, value, str, number) => {
    if (valueStr === 'financial') {
      return value === str ? value : `${value} / ${number}`;
    }
    return value === str ? 'Not analyzed yet' : `${value} / ${number}`;
  };

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

  handlerPageDonate = () => {
    const { history } = this.props;
    history.push('/under-construction');
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
      .then(response => response.json())
      .then(response => {
        const { data, error } = response;
        if (error) {
          this.setState({ isData: true });
          return;
        }
        const array = data.map((item, index) => {
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

        const detales = [
          {
            id: 1,
            title: category,
            background:
              'https://t4.ftcdn.net/jpg/01/66/07/21/500_F_166072192_CCSQGkwDcjHm2IEK8u2DYBjE5IyEG5NI.jpg',
            text: `Lorem ipsum dolor sit amet, donec augue porta ultricies magna,
              mus habitant amet sollicitudin, ad ante diam sed etiam tristique,
              pellentesque erat. Dui enim vel ac posuere sit eros. Mus et viverra quisque,
              maiores aliquet fusce pellentesque feugiat, ac sed, gravida est magna. Non quis,`,
          },
        ];

        this.setState({
          detales,
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
    const { data, activeMore, isData, refresh, detales } = this.state;
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
              <HeaderCategory
                numberOfResult={data.length}
                name={detales[0].title}
              />
              <CharityCount refresh={refresh} />
              <div className="container">
                <div className="result-cards">
                  {data.slice(0, 5).map(item => {
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
                        extraClass="result-cards-caregory"
                        idChirty={idChirty}
                        key0={id}
                        isActive={isActive}
                        onClickCompare={() =>
                          this.changeActive(item.id, item.idChirty)
                        }
                        onClickDonate={() => this.handlerPageDonate()}
                        logo={logo}
                        name={this.capitalFirst(name)}
                        text={this.capitalFirst(this.stringIsMore(name, text))}
                        financial={this.handleFromat(
                          'financial',
                          financial,
                          '#DIV/0!',
                          6
                        )}
                        governance={this.handleFromat(
                          'governance',
                          governance,
                          ' -   ',
                          8
                        )}
                        impact={this.handleFromat('impact', impact, ' -   ', 3)}
                      />
                    );
                  })}
                  {!activeMore && (
                    <More
                      specificٍSize={this.specificٍSize(data)}
                      getAllData={() => this.getAllData()}
                    />
                  )}
                  {activeMore &&
                    data
                      .slice(5, data.length)
                      .map(item => (
                        <ResultCard
                          extraClass="result-cards-caregory"
                          idChirty={item.idChirty}
                          key0={item.id}
                          isActive={item.isActive}
                          onClickCompare={() =>
                            this.changeActive(item.id, item.idChirty)
                          }
                          onClickDonate={() => this.handlerPageDonate()}
                          logo={item.logo}
                          name={this.capitalFirst(item.name)}
                          text={this.capitalFirst(
                            this.stringIsMore(item.name, item.text)
                          )}
                          financial={this.handleFromat(
                            'financial',
                            item.financial,
                            '#DIV/0!',
                            6
                          )}
                          governance={this.handleFromat(
                            'governance',
                            item.governance,
                            ' -   ',
                            8
                          )}
                          impact={this.handleFromat(
                            'impact',
                            item.impact,
                            ' -   ',
                            3
                          )}
                        />
                      ))}
                </div>
                <div className="category-details">
                  <CategoryDetails
                    id={detales.length === 0 ? '' : detales[0].id}
                    title={detales.length === 0 ? '' : detales[0].title}
                    text={detales.length === 0 ? '' : detales[0].text}
                    background={
                      detales.length === 0 ? '' : detales[0].background
                    }
                  />
                </div>
              </div>
            </>
          )}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Category;
