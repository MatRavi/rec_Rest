import logo from './images/logo.png';
import './App.css';
import MenuBar from './components/Menus/MenuBar'

function App(){
  return (
  <>
    <div className="App">
        <img src={logo} alt="logo" />
        <MenuBar />
        
    </div>
  </>
  );
}

export default App;
