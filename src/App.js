import './App.css';
import {Routes, Route} from 'react-router-dom'

import Home from "./component/page/home"
import PrivateChecker from './component/checker/private_checker'
import Private from './component/page/private'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/private" element={<PrivateChecker/>}>
          <Route path="/private/content-manager" element={<Private/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
