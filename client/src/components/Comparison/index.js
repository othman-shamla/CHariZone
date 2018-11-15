import CircularProgressbar from 'react-circular-progressbar';
import React, { Component } from 'react';
import './index.css';

import CompareTable from './CompareTable';

class Comparison extends Component {
  render() {
    const percentage = 66;
    return (
      <div className="compare-body">
        <div className="compare-box">
          <div className="circule">
            <img
              alt="counter logo"
              className="counter-img"
              src="https://files.gitter.im/ChariZone/Lobby/Qyjb/line-chart-_4_.png"
            />
              <span className="charity-counter"><h3 className="compare-num">3</h3></span>
          </div>
          <div className="charty-names">
          <h3 className="page-desc">Charity To Compare : </h3>
            <h4 className="charityc-name charityc-name-hovered">BLISS -THE NATIONAL CHARITY </h4>
            <h4 className="charityc-name">ACTION FOR CHILDREN</h4>
            <h4 className="charityc-name">BECOME CHARITY</h4>
          </div>
        </div>

        <div className="compare-container">
          <div className="logos">
            <span className="basic-logo logo-span">
              <img
                alt="basic logo"
                className="basic-img"
                src="https://imgur.com/labp2lA.png"
              />
            </span>

            <span className="financial-logo logo-span">
              <img
                alt="financial logo"
                className="financial-img"
                src="https://imgur.com/byldMLA.png"
              />
            </span>
            <span className="governance-logo logo-span">
              <img
                alt="governance logo"
                className="governance-img"
                src="https://imgur.com/uK6GWci.png"
              />
            </span>
            <span className="impact-logo logo-span">
              <img
                alt="impact logo"
                className="impact-img"
                src="https://imgur.com/1jG8geW.png"
              />
            </span>
          </div>
          < CompareTable/>
        { // <div className="compare-div">
          //   <div className="column-div">
          //     <div className="table-logo">
          //       <img
          //         alt="table logo"
          //         className="table-img"
          //         src="https://imgur.com/5n3hJuH.png"
          //       />
          //     </div>
          //     <div className="table-column">
          //       <div className="table-cell">
          //         <h5 className="tooltip">
          //           T:NO
          //           <span className="tooltiptext">
          //             NUMBER OF TRUSTEES recommend under 15 trustees and over 2
          //             trustees
          //           </span>
          //         </h5>
          //       </div>
          //       <div className="table-cell">
          //         <h5>T:Bio</h5>
          //       </div>
          //       <div className="table-cell">
          //         <h5>T:ToB</h5>
          //       </div>
          //       <div className="table-cell">
          //         <h5>EC</h5>
          //       </div>
          //       <div className="table-cell">
          //         <h5>P:GDPR</h5>
          //       </div>
          //       <div className="table-cell">
          //         <h5>P:W</h5>
          //       </div>
          //       <div className="table-cell">
          //         <h5>P:H&S</h5>
          //       </div>
          //       <div className="table-cell">
          //         <h5>P:SG</h5>
          //       </div>
          //       <div className="table-cell">
          //         <h5>P: FP</h5>
          //       </div>
          //     </div>
          //   </div>
          //   <div className="content-div">
          //     {[0, 1, 0].map(x => (
          //       <div className="charity-column">
          //         <div className="column-cell">
          //           {' '}
          //           <img src="https://imgur.com/JrMn3j9.png" />
          //         </div>
          //         <div className="column-cell">
          //           {' '}
          //           <img src="https://imgur.com/GmAnTas.png" />
          //         </div>
          //         <div className="column-cell">
          //           {' '}
          //           <img src="https://imgur.com/cO7uPgA.png" />
          //         </div>
          //         {[0, 1, 0, 0].map(x => (
          //           <div className="column-cell">
          //             <CircularProgressbar
          //               viewBox="0 0 164 180"
          //               percentage={percentage}
          //               backgroundPadding={20}
          //               text={`${percentage}%`}
          //               styles={{
          //                 root: { width: '40px' },
          //                 path: {
          //                   stroke: `rgba(215, 111, 53, ${percentage / 100})`,
          //                 },
          //                 text: {
          //                   fill: '#D76F35',
          //                   fontSize: '30px',
          //                   dominantBaseline: 'middle',
          //                   textAnchor: 'middle',
          //                   fontWeight: '700',
          //                 },
          //                 trail: { stroke: '#ccc' },
          //               }}
          //             />
          //           </div>
          //         ))}
          //         <div className="column-cell"> hi</div>
          //       </div>
          //     ))}
          //   </div>
          // </div>
        }
        </div>
      </div>
    );
  }
}

export default Comparison;
