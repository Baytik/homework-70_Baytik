import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import axiosAPI from "./axiosAPI";

const App = () => {
    const initialShows = [];
    const [shows, setShows] = useState(initialShows);
    const initialText = '';
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
                  <input type="text" onChange={(e) => setText(e.target.value)} value={text}/>
              </div>
          </div>
                <div className="blocks">
              {Object.keys(shows).map(k => (
                  <div key={k}>
                    <div className="block">
                       <p>{shows[k].show.name}</p>
                      <img src={shows[k].show.image.medium} alt="images"/>
                    </div>
                  </div>
              ))}
                </div>
      </div>
  )
};

export default App;
