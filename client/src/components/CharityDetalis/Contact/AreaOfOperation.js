import React from 'react';

const areaOfOperationRow = areaOfOperation => {
  const halfLength = Math.floor(areaOfOperation.length / 2);
  let areaOfOperationColumnOne = areaOfOperation;
  let areaOfOperationColumnTwo = [];
  if (areaOfOperation.length > 6) {
    areaOfOperationColumnOne = areaOfOperation.slice(0, halfLength);
    areaOfOperationColumnTwo = areaOfOperation.slice(
      halfLength,
      areaOfOperation.length
    );
  }
  return (
    <>
      <div className="header--items">
        {areaOfOperationColumnOne.map((x, i) => (
          <span key={x + i}>{x}</span>
        ))}
      </div>
      <div className="header--items">
        {areaOfOperationColumnTwo.map((x, i) => (
          <span key={x + i}>{x}</span>
        ))}
      </div>
    </>
  );
};

export default areaOfOperationRow;
