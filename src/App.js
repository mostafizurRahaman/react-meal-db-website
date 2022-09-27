import './App.css';
import Meals from './components/Meals/Meals';
import Header from './components/Header/Header';
import { toAvoidInspect } from './components/Utilities/Utilities';
function App() {
  toAvoidInspect();
  return (
    <div className="App">
    <Header></Header>
    <Meals></Meals>
    </div>
  );
}

export default App;
