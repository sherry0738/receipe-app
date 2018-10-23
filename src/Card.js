import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
  <div className="card">
   {props.title}
  </div>
  )  
};

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.children}
    </div>
  )
};
export default Card
export { CardList }