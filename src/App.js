import React from 'react';

function Movie( {title} ) {
  return <h1>The Movie Title is {title}</h1>
}

function App() {
  return (
    <div className="App">
      <h1>Hello World!!</h1>
      <Movie title="itaewon" />
    </div>
  );
}

export default App;
