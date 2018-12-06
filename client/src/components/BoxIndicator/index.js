import React, { Component } from 'react';
import './index.css';

const BoxIndicator = () => (

<div className="box-indicator">
<div className="flags-column">
<img className="flagImg" src="https://imgur.com/GmAnTas.png" />
<img className="flagImg" src="https://imgur.com/cO7uPgA.png" />
<img className="flagImg" src="https://imgur.com/JrMn3j9.png" />
</div>
<div className="flagsDescr-column">
<h5>healthy</h5>
<h5>neuteral</h5>
<h5>Unhealthy</h5>
</div>
</div>


);


export default BoxIndicator;
