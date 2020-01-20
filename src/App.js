import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import axiosAPI from "./axiosAPI";

const App = () => {

    const initialShows = [];
    const initialText = '';
    const [shows, setShows] = useState(initialShows);
    const [text, setText] = useState(initialText);
    console.log(shows);

    const fetchData = async () => {
      const response = await axiosAPI.get();
      setShows(response.data);
    };
    useEffect( () => {
        fetchData();
    }, []);

  return (
      <div className="App">
          <Header/>
          <div className="Content">
              <div>
                  <p className="main-title">Search for TV Show</p>
              </div>
              <div>
                  <input type="text"/>
              </div>
          </div>
      </div>
  )
};

export default App;
