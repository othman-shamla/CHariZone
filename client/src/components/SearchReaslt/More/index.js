/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import './style.css';

class More extends Component {
  state = {};

  render() {
    const { getAllData, specificٍSize } = this.props;

    return (
      <React.Fragment>
        {specificٍSize && (
          <button
            type="button"
            className="more"
            onClick={() => getAllData()}
            onKeyDown={this.handleKeyDown}
          >
            More..
          </button>
        )}
      </React.Fragment>
    );
  }
}

export default More;
