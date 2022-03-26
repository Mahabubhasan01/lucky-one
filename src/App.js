
import './App.css';
import Header from './Components/Header/Header';
import Question from './Components/Question/Question';
import Wines from './Components/Wines/Wines';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Wines></Wines>
     <Question></Question>
    </div>
  );
}

export default App;
