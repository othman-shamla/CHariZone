/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import ReactLoading from 'react-loading';

import CharityHeader from './CharityHeader';
import MainDetails from './MainDetails';
import Kpis from './Kpis';
import Contact from './Contact';
import Header from '../Header';
import Footer from '../HomePage/Footer';
import CharityCount from '../CommonComponents/CharityCount';

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
    loading: true,
    found: false,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`/api/v1/charity/${id}`)
      .then(response => response.json())
      .then(json => {
        const { data, err } = json;
        if (err === 'NO-CHARITY') {
          return this.setState({
            loading: false,
            found: true,
          });
        }
        const {
          regno,
          EmailAddress,
          PublicTelephoneNumber,
          WebsiteAddress,
          Address,
          AreaOfOperation,
          img,
        } = data;
        delete data.regno;
        this.setState({
          loading: false,
          charity: {
            img,
            charityNumber: regno,
            email: EmailAddress,
            phoneNumber: PublicTelephoneNumber,
            website: WebsiteAddress,
            address: JSON.parse(Address),
            areaOfOperation: JSON.parse(AreaOfOperation),
            ...data,
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
          Ecr={Ecr}
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

  refreshCount = () => {
    const { charityNumber } = this.state.charity;
    const arraySelect = JSON.parse(localStorage.getItem('listCharity')) || [];
    const charitylist = arraySelect.filter(
      charity => charity !== charityNumber
    );
    if (charitylist.length === arraySelect.length) {
      charitylist.push(charityNumber);
    }
    localStorage.setItem('listCharity', JSON.stringify(charitylist));
    this.setState(state => {
      const { charityCountrefresh } = state;
      return {
        charityCountrefresh: !charityCountrefresh,
      };
    });
  };

  renderLoadingBubbles = () => (
    <div className="loading-bubbles">
      <ReactLoading type="bubbles" color="#f76009" height="20%" width="20%" />
    </div>
  );

  renderContent = () => {
    const {
      found,
      tabs,
      charity: { name, charityNumber, img },
      charityCountrefresh,
    } = this.state;
    const { history } = this.props;
    const Contant = this.renderTab(tabs);
    if (found) {
      return <h1 style={{ margin: '160px' }}>No charity Found</h1>;
    }
    return (
      <>
        <div style={{ margin: '110px auto', width: '80%' }}>
          <CharityHeader
            history={history}
            img={img}
            charityNumber={charityNumber}
            ChangeCompare={this.refreshCount}
            changeTab={this.changeTab}
            tabs={tabs}
            name={name}
          />
          {Contant}
        </div>
        <div>
          <CharityCount refresh={charityCountrefresh} />
        </div>
        <Footer />
      </>
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <>
        <Header />
        {loading ? this.renderLoadingBubbles() : this.renderContent()}
      </>
    );
  }
}

export default CharityDetalis;
