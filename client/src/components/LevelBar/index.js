import React, { Component } from 'react';
import './index.css';

const LevelBar0 = () => (<div className="LevelBar-box" >
<div className="emptyBar"></div>
<div className="emptyBar"></div>
<div className="emptyBar"></div>
</div>
);

const LevelBar1 = () => (<div className="LevelBar-box" >
<div className="fillBar"></div>
<div className="emptyBar"></div>
<div className="emptyBar"></div>
</div>
);

const LevelBar2= () => (<div className="LevelBar-box" >
<div className="fillBar"></div>
<div className="fillBar"></div>
<div className="emptyBar"></div>
</div>
);

const LevelBar3= () => (<div className="LevelBar-box" >
<div className="fillBar"></div>
<div className="fillBar"></div>
<div className="fillBar"></div>
</div>
);


export { LevelBar0, LevelBar1,LevelBar2,LevelBar3 };
