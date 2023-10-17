
import './App.css';
import FeatureContent from './components/Home/FeatureContent';
import HomePage from './components/Home/HomePage';

import MiddleContent from './components/Home/MiddleContent';

import HomePage from './components/HomePage';
import MiddleContent from './components/MiddleContent';
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
