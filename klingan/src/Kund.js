import React from 'react';
import HelloWorld from './HelloWorld';
import Square from './Square';
import './App.css';
import './Kund.css';
import ReactDOM from 'react-dom';
import Handlare from './Handlare';


function Kund() {

    return (
      <div className="Kund">
        {GoToHandlare()}
        <h1>Kund MotherFucker</h1>     
      </div>
    );
  }

  function GoToHandlare(){
    return <button onClick={redirectToHandlare}>Handlare</button>
  }
  
  function redirectToHandlare(){
    ReactDOM.render(
        <Handlare/>,
        document.getElementById('root')
      );
  }

  export default Kund;