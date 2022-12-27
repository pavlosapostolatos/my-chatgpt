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

  handleSubmit = async e => {
      e.preventDefault();
      await this.setState({
          chatLog: [...this.state.chatLog,
              {user: "me", message: this.state.input}]
      })
      await this.setState({input: ""})
      console.log(this.state.chatLog);

      const response = await fetch("http://localhost:4000", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin" : "*"
          },
          body: JSON.stringify({
              message: this.state.chatLog.map(
                  (message) => message.message).join("")
          })
      });
      const data = await response.json();
      console.log(data);
      this.setState({
          chatLog: [...this.state.chatLog,
              {user: "gpt", message: data.message}]
      })
  }

  render() {

      function clearChats() {
         this.setState({chatLog: []})
      }

      return (
        <div className="App">
          <aside className="sidemenu">
            <div className="sidemenu-button" onClick={clearChats}>
          <span className="sidemenu-button-span">
            +
          </span>
              New Chat

        </div>
          </aside>
          <section className="chatbox">
            <div className="chat-log">
                {this.state.chatLog.map((message, index) => <ChatMessage key={index} message={message} /> )}
              <ChatMessage key={1000} message={{user: "gpt", message: "AI"}} />
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
