import logo from './logo.svg';
import './App.css';
import Lobby from './components/lobby/lobby';

function App() {
  return (
    <div className="App">
      <Canvas shadow>
          <Lobby/>
      </Canvas>
    </div>
  );
}

export default App;