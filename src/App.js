
import './App.css';
import FeatureContent from './components/Home/FeatureContent';


import MiddleContent from './components/Home/MiddleContent';

import HomePage from './components/Home/HomePage';

import Movies from './components/Movies/Movies';

function App() {
  return (
    <div >
    <HomePage/>
    <MiddleContent/>
    <Movies/>
    
    <MiddleContent/>
 <FeatureContent/>
    </div>
  );
}

export default App;
