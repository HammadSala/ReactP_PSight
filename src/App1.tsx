import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Imagecomponent from './components/Imagecomponent';

function App() {

  const arrayId = [ "1", "2", "3", "4", "5"];
  const [ mouseevent, setMouseEvent ] = useState(0);
  const [ speakerId, setSpeakerId] = useState("");

  useEffect ( () => {
    window.document.title = speakerId
  }
    ,[speakerId]
  )

  return (
    <div className="App">
      <header className="App-header">
        Learn React<hr/>
        Mouse Event : {mouseevent}
        {arrayId.map(img => (
          <div key={img} onMouseMove={()=> {
                                setMouseEvent(mouseevent + 1)
                                setSpeakerId(img)}
                                    }>
              <Imagecomponent  primaryPath={ require(`./images/${img}.jpg`)}
                        secondarPath={require(`./images1/${img}.jpg`)
                      }
             />
          </div>))}
      </header>
    </div>
  );
}

export default App;
