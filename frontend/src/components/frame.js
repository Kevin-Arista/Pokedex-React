import React, {useState} from 'react';
import axios from 'axios';
import './frame.css'

const FrameComponent = ()=>{

    const api = axios.create({
        baseURL: `http://localhost:8080/catch`
      });
    
      let [pokemonDats, setPokemonDats] = useState();
      
      api.get('/all-pokemons').then(res =>{
        console.log(res.data);
        setPokemonDats(res.data)
      });

      return(
        <div className="FrameComponent">
            {pokemonDats?.map(card => 
            <div className="infoCard" key={card.name}>
              <p>{card.name}</p>
              <hr/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1024px-Pok%C3%A9_Ball_icon.svg.png" alt="unkown"/>
            </div>
            )}
            
        </div>
      );
} 

export default FrameComponent;
