import React from 'react';
import axios from 'axios';



function App() {

  const searchInput = (input) =>{
    console.log(input.target.value);
  }

  return (
    <>
      <h2> Search Todo </h2>
      <input onChange={searchInput} />
    </>
  );
}

export default App;
