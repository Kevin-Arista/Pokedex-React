import React from 'react';
import pikachu from '../assets/pikachu.png'
import snivy from '../assets/snivy.png'
import './home.css'

const Home = () =>{
  return (
    <div className='Home'>
      <h3>Home</h3>
        <p>Welcome to Pokedex landing page!</p>
        <img id="pikachu" src={pikachu}/>
        <img id="snivy" src={snivy}/>
    </div>
  );
}
export default Home;
