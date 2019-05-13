import {createGlobalStyle} from 'styled-components'
import color from 'color'
import RedwallColorPallete from 'color-pallete-component-module'
import Theming from 'theming-component-module'
import Color from 'color';
const theme = Theming.createThemeWithAppearance()

const defaultProps = {
  appearance: 'default',
  theme: {
    mode: 'light'
  }
}

export const ToastStyle = createGlobalStyle`

  .iziToast {
    background-color:  ${props =>
      props.type === 'error' ? 'rgb(254, 66, 66)' :
      props.type === 'info' ? 'blue' :
      Color(theme(props).color(props)).string()
    } !important;
  }

  .iziToast-title {
    color: ${props => Color(theme(props).contrast(props)).grayscale().string()} !important;
  }

  .iziToast-message {
    color: ${props => Color(theme(props).contrast(props)).grayscale().fade(.3).string()} !important;
  }

  .iziToast::after {
    border-radius: 6px 6px 2px 2px !important;
    box-shadow: inset 0 -10px 20px -10px rgba(0,0,0,0.2), inset 0 0 5px rgba(0,0,0,0.1), 0 8px 15px 0 rgba(0,0,0,0.1) !important;
    transition: all .2s;
  }

  .iziToast:hover::after {
    box-shadow: inset 0 -10px 20px -10px rgba(0,0,0,0.2), inset 0 0 5px rgba(0,0,0,0.1), 0 6px 12px -5px rgba(0,0,0,0.3) !important;
  }

  .iziToast-progressbar > div {
    border-radius: 0 0 6px 6px !important;
  }
`

ToastStyle.defaultProps = defaultProps
