import React from 'react';
import HelloWorld from './HelloWorld';
import Square from './Square';
import './App.css';
import ReactDOM from 'react-dom'
import Handlare from './Handlare'


function Kund() {

    return (
      <div className="Kund">
        {GoToHandlare()}
        <Square name="Kund"/>     
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