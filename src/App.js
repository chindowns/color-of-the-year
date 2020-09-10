import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  // set state for the json API colors
  const [colorArr, setColorArr] = useState([]);
  const [loading, setLoading] = useState(false);

  // Loads the colors for the URL API to colorArr using state
  useEffect(() => {
    if (!loading) {
      fetch(url)
        .then(response => response.json())
        .then(result => {
          setColorArr(result.data);
          setLoading(true);
        })
        .catch(err => console.log(err));
    }
  }, [loading])

  return (
    <>
      <header>Colors of the year from 2000 - 2011</header>
      <div id="cardsContainer">
        {colorArr.map(color => (
          <Card key={color.id}
            data={color}
          />))}
      </div>
      <footer>Brought to you by <a href="https://chindowns.github.io">Michael Downs</a></footer>
    </>
  )
}

export default App;
