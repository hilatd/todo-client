import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { debouncer } from './utils';



function App() {
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);
  const searchInput = (input) =>{
    setResults([...(data)?.flatMap(d=>d.title.includes(input.target.value) ? d.title : [])]);
  }

  const search = debouncer(searchInput, 1000);
    useEffect(() => {
    async function fetchData(){
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setData(res.data)
    }
    fetchData();
  }, []);




  return (
    <>
      <h2> Search Todo </h2>
      <input onChange={search} />
      <ul>
        {results.map((r,i)=>(<li key={i}>{r}</li>))}
      </ul>
    </>
  );
}

export default App;
