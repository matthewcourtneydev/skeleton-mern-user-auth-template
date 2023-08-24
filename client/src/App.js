import React, { useState, useEffect } from 'react';

const App = () => {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      res => res.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof backendData.myArray === "undefined") ? (
        <div>Loading...</div>
      ) : (
        backendData.myArray.map((number) => (
          <div key={number}>This number is {number}</div>
        ))
      )}
    </div>
  );
}

export default App;

