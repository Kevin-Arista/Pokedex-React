import React, {useState} from 'react';
import axios from 'axios';
import './frame.css'

const FrameComponent = ()=>{

    const api = axios.create({
        baseURL: `http://localhost:8080/catch`
      });
    
      let [pokemonDats, setPokemonDats] = useState();
      
      api.get('/all-pokemons').then(res =>{
        setPokemonDats(res.data)
      });

      return(
        <div className="FrameComponent">
            {pokemonDats?.map(card => 
            <div className="infoCard" key={card.name}>
              <p>{card.name}</p>
              <img src={card.image} alt="unkown"/>
            </div>
            )}
            
        </div>
      );
} 

export default FrameComponent;
