import React, { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';

const App = () => {
  const apiTesting = () => {
    fetchDataFromApi('/movie/popular').then((res) => console.log(res));
  };

  useEffect(() => {
    apiTesting();
  }, []);

  return (
    <div className='App'>
      <h1>Let's Build this App</h1>
    </div>
  );
};

export default App;
