import React, { Component } from 'react';
import { withTheme } from 'styled-components';

import izitoast from 'izitoast'
import 'izitoast/dist/css/iziToast.css'
import { ToastStyle } from './Style';

class Toast extends Component {

  state = {
    type: 'default'
  }

  componentDidMount() {
    izitoast.settings({
      closeOnEscape: true,
      closeOnClick: true,
      displayMode: 2,
      position: 'bottomCenter'
    })
    if(this.props.getToastController){
      this.props.getToastController(this.exposeController())
    }
  }

  exposeController = () => {
    return {
      default: this.open,
      error: this.error
    }
  }

  open = (options) => {
    izitoast.show(options)
  }

  error = (options) => {
    this.setState({
      type:'error'
    });
    this.open(options)
  }

  render() {
    return (
      <ToastStyle {...this.props} type={this.state.type}/>
    );
  }

}

Toast.defaultProps = {
  appearance: 'default',
  theme: {
    mode: 'light'
  }
}

export default withTheme(Toast)
