/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import CharityHeader from './CharityHeader';
import MainDetails from './MainDetails';
import Kpis from './Kpis';
import Contact from './Contact';
import Header from '../Header';
import Footer from '../Footer';

class CharityDetalis extends Component {
  state = {
    tabs: 1,
    charity: {
      /* Header */
      name: '',
      /* Contact */
      charityNumber: '',
      phoneNumber: '',
      faxNumber: '',
      email: '',
      website: '',
      address: [],
      areaOfOperation: [],
      /* MainDetails */
      objective: '',
      who: [],
      what: [],
      how: [],
      /* KPI */
      EMR: '',
      averageFundraising: '',
      Ecr: '',
      Currr: '',
      donerDependency: '',
      numberOfTrustees: '',
      executiveCompensation: '',
      policyHealth: '',
      trusteesBiography: '',
      policyGeneral: '',
      safeGuarding: '',
      tob: '',
      policyWhistleblowing: '',
      fundraisingPromise: '',
      impactReporting: '',
      impactResults: '',
      mentionOfTheory: '',
    },
  };

  componentWillMount() {
    const { id } = this.props.match.params.id;
    fetch(`api/v1/charity/${id}}`)
      .then(response => response.json())
      .then(json => {
        const {
          regno,
          EmailAddress,
          PublicTelephoneNumber,
          WebsiteAddress,
        } = json.data;
        delete json.data.regno;
        this.setState({
          charity: {
            charityNumber: regno,
            email: EmailAddress,
            phoneNumber: PublicTelephoneNumber,
            website: WebsiteAddress,
            address: JSON.parse(json.data.Address),
            areaOfOperation: JSON.parse(json.data.AreaOfOperation),
            ...json.data,
          },
        });
      });
  }

  changeTab = tab => {
    this.setState({
      tabs: tab,
    });
  };

  renderTab = tabs => {
    if (tabs === 2) {
      const {
        charityNumber,
        phoneNumber,
        faxNumber,
        email,
        website,
        address,
        areaOfOperation,
      } = this.state.charity;
      return (
        <Contact
          charityNumber={charityNumber}
          phoneNumber={phoneNumber}
          faxNumber={faxNumber}
          email={email}
          website={website}
          address={address}
          areaOfOperation={areaOfOperation}
        />
      );
    }
    if (tabs === 3) {
      const {
        EMR,
        averageFundraising,
        Ecr,
        Currr,
        donerDependency,
        numberOfTrustees,
        executiveCompensation,
        policyHealth,
        trusteesBiography,
        policyGeneral,
        safeGuarding,
        tob,
        policyWhistleblowing,
        fundraisingPromise,
        impactReporting,
        impactResults,
        mentionOfTheory,
      } = this.state.charity;
      return (
        <Kpis
          EMR={EMR}
          averageFundraising={averageFundraising}
          Ect={Ecr}
          Currr={Currr}
          donerDependency={donerDependency}
          numberOfTrustees={numberOfTrustees}
          executiveCompensation={executiveCompensation}
          policyHealth={policyHealth}
          trusteesBiography={trusteesBiography}
          policyGeneral={policyGeneral}
          safeGuarding={safeGuarding}
          tob={tob}
          policyWhistleblowing={policyWhistleblowing}
          fundraisingPromise={fundraisingPromise}
          impactReporting={impactReporting}
          impactResults={impactResults}
          mentionOfTheory={mentionOfTheory}
        />
      );
    }
    const { objective, who, what, how } = this.state.charity;
    return (
      <MainDetails
        objective={objective.toLowerCase()}
        who={who.map(x => x.toLowerCase())}
        how={what.map(x => x.toLowerCase())}
        what={how.map(x => x.toLowerCase())}
      />
    );
  };

  render() {
    const { tabs, name } = this.state;
    const Contant = this.renderTab(tabs);
    return (
      <React.Fragment>
        <Header />
        <div style={{ margin: '110px auto', width: '80%' }}>
          <CharityHeader
            changeTab={this.changeTab}
            tabs={tabs}
            name={name}
          />
          {Contant}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default CharityDetalis;
