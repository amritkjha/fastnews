import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  const apiKey = process.env.REACT_APP_FETCH_API;
  const [progress, setProgress] = useState(0);
  return (
    <div>
      {/* <h1>Jai Shree Ram</h1> */}
      <Router>
        <LoadingBar color='#f11946' progress={progress} height={3} />
        <Navbar />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} key={1} pageSize={15} country="in" apiKey={apiKey} category="general" /></Route>
          <Route exact path="/business"><News setProgress={setProgress} key={2} pageSize={15} country="in" apiKey={apiKey} category="business" /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} key={3} pageSize={15} country="in" apiKey={apiKey} category="entertainment" /></Route>
          <Route exact path="/general"><News setProgress={setProgress} key={4} pageSize={15} country="in" apiKey={apiKey} category="general" /></Route>
          <Route exact path="/health"><News setProgress={setProgress} key={5} pageSize={15} country="in" apiKey={apiKey} category="health" /></Route>
          <Route exact path="/science"><News setProgress={setProgress} key={6} pageSize={15} country="in" apiKey={apiKey} category="science" /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} key={7} pageSize={15} country="in" apiKey={apiKey} category="sports" /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} key={8} pageSize={15} country="in" apiKey={apiKey} category="technology" /></Route>
        </Switch>
      </Router>
    </div>
  )
}

