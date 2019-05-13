import React from 'react';
import { render } from "react-dom";
import { ThemeProvider } from 'styled-components';
import Toast from './lib'

class App extends React.Component {

  state = {
    mode: 'light'
  }

  changeMode = (input) => {
    const mode = input.target.id
    this.setState({
      mode
    });
  }

  getToastController = (toastController) => {
    this.toastController = toastController
  }

  toast = () => {
    this.toastController.default({title: "Oi", message: "hauhauhau", timeout: 20000})
    this.toastController.error({title: 'Ops', message: "This is a error."})
  }

  render() {
    return (
      <ThemeProvider theme={{mode:this.state.mode}}>
        <div style={{transition: 'all .3s', height: '99vh', width: '98vw', backgroundColor: this.state.mode === 'dark' ? 'rgb(44, 55, 56)' : 'rgb(244, 244, 244)'}}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <label htmlFor='light'>Light Mode</label>
            <input type='radio' id='light' name='mode' onChange={this.changeMode}/>
            <label htmlFor='dark'>Dark Mode</label>
            <input  type='radio' id='dark' name='mode' onChange={this.changeMode}/>
          </div>
          <Toast appearance='default' getToastController={this.getToastController}/>
          <button onClick={this.toast}>Toast!</button>
        </div>
      </ThemeProvider>
    )
  }
}

render(<App />, document.getElementById("root"));
