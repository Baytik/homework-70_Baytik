import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import axiosAPI from "./axiosAPI";
import nanoid from 'nanoid';

const App = () => {

    const initialShows = [];
    const [shows, setShows] = useState(initialShows);
    const initialText = '';
    const [text, setText] = useState(initialText);

    const fetchData = async () => {
      const response = await axiosAPI.get(text);
      setShows(response.data);
    };

    const inputChangeHandler = (e) => {
        fetchData();
        setText(e.target.value);
    };

    useEffect( () => {
        fetchData();
    }, [text]);

    const changeSelection = () => {
        Object.keys(shows).map(name => {
            setText(shows[name].show.name);
        })
    };

  return (
      <div className="App">
          <Header/>
          <div className="Content">
              <div>
                  <p className="main-title">Search for TV Show</p>
              </div>
              <div>
                  <input type="text" onChange={inputChangeHandler} value={text}/>
                      {Object.keys(shows).map(name => (
                              <div key={nanoid()} className="selection" onClick={changeSelection}>{shows[name].show.name}</div>
                      ))}
              </div>
          </div>
                <div className='blocks'>
                    {Object.keys(shows).map(name => (
                        <div key={name} className="block">
                            <div>
                                <img src={shows[name].show.image && shows[name].show.image.medium} alt="images"/>
                            </div>
                            <div>
                            <p className="main-text">{shows[name].show.name}</p>
                            <p className="text">{shows[name].show.summary}
                            </p>
                            </div>
                        </div>
                    ))}
                </div>
      </div>
  )
};

export default App;
