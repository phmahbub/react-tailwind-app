import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <div className="App">
    <NavigationBar></NavigationBar>
    <h1 className="text-9xl font-bold underline text-cyan-300">
    Hello world!
  </h1>
    </div>
  );
}

export default App;
