import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
function App() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    console.log('hello');
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        console.log(response.data);
        setAdvice(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='app'>
        <div className='card'>
            <h1 className='heading'>{advice}</h1>
            <button className='button' onClick={fetchAdvice}>
              <span>GIVE ME ADVICE!</span>
            </button>
        </div>
    </div>
  );
}

export default App;
