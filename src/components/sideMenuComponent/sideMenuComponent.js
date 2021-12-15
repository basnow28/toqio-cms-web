import React from 'react';
import './sideMenuComponent.css';


export const SideMenuComponent = (props) => {
  return (
    <div className='title'>
      {props.text}
    </div>
  )
}