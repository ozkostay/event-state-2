import React from "react";
import './IconSwitch.css';

export default function IconSwitch({changeView, iconState}) {

  return (
    <div className="border switchView">
      <div className="border icon">
        <button className="material-icons" onClick={changeView}>{iconState}</button>
      </div>
    </div>
  )
}
