import logo from './logo.svg';
import './App.css';
import 'normalize.css'
import './border-box.css'

function App() {
  return (
    <div className="App">
      <aside className = "sidemenu">
        <div className = "sidemenu-button">
          <span className = "sidemenu-button-span">
            +
          </span>
          New Chat

        </div>
      </aside>
      <section className = "chatbox">
        <div className = "chat-input-holder">
          <textarea 
            rows = "1"
            className = "chat-input-textarea" 
            placeholder = "type your messsage here">
          </textarea>
        </div>
      </section>

      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
