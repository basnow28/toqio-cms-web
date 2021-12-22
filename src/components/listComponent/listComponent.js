import React from 'react';
import './listComponent.css';


export const ListComponent = (props) => {
  return (
    <div className='title'>
      {props.text}
    </div>
  )
}