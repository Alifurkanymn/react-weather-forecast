import './App.scss';
import LeftBar from './Components/LeftBar';
import RightContent from './Components/RightContent';
import Weather from './Components/Weather';
function App() {
  return (
    <div className="App">
      <div className="App__menu">
        <LeftBar />
        </div>
      <div className="App_content">
        <Weather />
      </div>
      <div className="App_rightContent">
        <RightContent />
      </div>
    </div>
  );
}

export default App;