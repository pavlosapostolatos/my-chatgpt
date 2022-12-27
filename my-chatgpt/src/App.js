import logo from './logo.svg';
import './App.css';
import 'normalize.css'
import './border-box.css'
import {Component, useState} from "react";
import ChatMessage from './ChatMessage';

class App extends Component {
  state = {
    input: "",
    chatLog : []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({chatLog:[... this.state.chatLog, {user: "me", message:  this.state.input}]})
    this.setState({input:""})
    console.log(this.state.chatLog);
  }

  render() {

    return (
        <div className="App">
          <aside className="sidemenu">
            <div className="sidemenu-button">
          <span className="sidemenu-button-span">
            +
          </span>
              New Chat

            </div>
          </aside>
          <section className="chatbox">
            <div className="chat-log">
              <ChatMessage key={1} message={{user: "me", message: "human"}} />
              <ChatMessage key={2} message={{user: "gpt", message: "AI"}} />
            </div>
            <div className="chat-input-holder">
              <form onSubmit={this.handleSubmit}>
                <input
                    rows="1"
                    name="message"
                    value={this.state.input}
                    onChange={(event) => {
                      this.setState({input: event.target.value})
                    }}
                    className="chat-input-textarea"
                    placeholder="type your messsage here">
                </input>
              </form>
            </div>
          </section>
        </div>
    );
  }


}

export default App;
