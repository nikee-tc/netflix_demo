
import './App.css';
import Card from './components/Card/Card';
import FeatureContent from './components/Home/FeatureContent';
import HomePage from './components/Home/HomePage';

import MiddleContent from './components/Home/MiddleContent';
import Movies from './components/Movies/Movies';

function App() {
  return (
    <div >
    <HomePage/>
    <MiddleContent/>
    <Movies/>
    {/* <Card/> */}
    <FeatureContent/>
    </div>
  );
}

export default App;
