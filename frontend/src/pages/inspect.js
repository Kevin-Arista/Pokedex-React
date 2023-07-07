import React, {useState} from 'react';
import CardComponent from '../components/card';
import './inspect.css';

const Inspect = () =>{
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <CardComponent textProp={inputText} />
    </div>
  );
}
export default Inspect;