import { createGlobalStyle } from 'styled-components'
import { createThemeWithAppearance } from '@redwallsolutions/theming-component-module'
import Color from 'color'
import { IToast } from './interfaces'
import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'
const theme = createThemeWithAppearance()

export const ToastStyle = createGlobalStyle<IToast & ICommonProps>`
  .iziToast {
    background-color:  ${props => theme(props).color};
  }

  .iziToast-title {
    color: ${props =>
			Color(theme(props).contrast(props))
				.grayscale()
				.string()} !important;
  }

  .iziToast-message {
    color: ${props =>
			Color(theme(props).contrast(props))
				.grayscale()
				.fade(0.3)
				.string()} !important;
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
