import React from 'react';
import CardComponent from '../components/card';
import './inspect.css'

const Inspect = () =>{
  return (
    <div>
      <h3>Inspect</h3>
      <input placeholder="Who's that Pokemon?"/>
      <button>GO!</button>
      <CardComponent></CardComponent>
    </div>
  );
}
export default Inspect;