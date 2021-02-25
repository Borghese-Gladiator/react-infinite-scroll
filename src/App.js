import logo from './logo.svg';
import './App.css';
import LogRocketBlog from './components/LogRocketBlog';
import ScrollComponent from './components/ScrollComponent';
import InfiniteScroll from './components/InfiniteScroll';
import InfiniteImageScroll from './components/InfiniteImageScroll';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <InfiniteImageScroll />
    </div>
  );
}

export default App;
