import React , { Component } from 'react';

import CharityHeader from './CharityHeader';
import MainDetails  from "./MainDetails";
import Kpis  from "./Kpis";
import Contact  from "./Contact";

class CharityDetalis extends Component {
  state = {
    tabs: 1
  }

  changeTab = (tab) => {
    this.setState({
      tabs: tab,
    });
  }

  renderTab = (tabs) => {
    if(tabs === 2 ){
      return <Contact 
      charityNumber="1010943"
      phoneNumber="0158275599"
      faxNumber="faxNumber"
      email="example@example.com"
      website="www.happydaycharty.com"
      address={['happy days charity','clody house']}
      areaOfOperation={['scotland','northern urland','thorougout england and wales']}
        />;
    } else if (tabs === 3 ) {
      return <Kpis />;
    } else {
      return <MainDetails
        objective={"TO HELP AND EDUCATE YOUNG PERSONS THROUGH THEIR LEISURE-TIME AND HOLIDAY ACTIVITIES.".toLocaleLowerCase()}
        who={[ 'CHILDREN/YOUNG PEOPLE',
        'PEOPLE WITH DISABILITIES',
        'OTHER CHARITIES OR VOLUNTARY BODIES' ].map(x=>x.toLowerCase())}
        how={[ 'MAKES GRANTS TO INDIVIDUALS',
        'MAKES GRANTS TO ORGANISATIONS' ].map(x=>x.toLowerCase())}
        what={[ 'GENERAL CHARITABLE PURPOSES',
        'EDUCATION/TRAINING',
        'THE ADVANCEMENT OF HEALTH OR SAVING OF LIVES',
        'DISABILITY',
        'THE PREVENTION OR RELIEF OF POVERTY',
        'ARTS/CULTURE/HERITAGE/SCIENCE',
        'AMATEUR SPORT' ].map(x=>x.toLowerCase())} />;
    }
  }

  render() {
    const { tabs } = this.state;
    const Contant = this.renderTab(tabs);
    return (
      <div style={{margin:"0px auto",width:"80%"}}>
        <CharityHeader 
          changeTab={this.changeTab} 
          tabs={tabs}
          name="name"/>
        {Contant}
      </div>
    );
  }
}
 
export default CharityDetalis;