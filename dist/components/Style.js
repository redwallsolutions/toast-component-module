import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  .iziToast {\n    background-color:  ", " !important;\n  }\n\n  .iziToast-title {\n    color: ", " !important;\n  }\n\n  .iziToast-message {\n    color: ", " !important;\n  }\n\n  .iziToast::after {\n    border-radius: 6px 6px 2px 2px !important;\n    box-shadow: inset 0 -10px 20px -10px rgba(0,0,0,0.2), inset 0 0 5px rgba(0,0,0,0.1), 0 8px 15px 0 rgba(0,0,0,0.1) !important;\n    transition: all .2s;\n  }\n\n  .iziToast:hover::after {\n    box-shadow: inset 0 -10px 20px -10px rgba(0,0,0,0.2), inset 0 0 5px rgba(0,0,0,0.1), 0 6px 12px -5px rgba(0,0,0,0.3) !important;\n  }\n\n  .iziToast-progressbar > div {\n    border-radius: 0 0 6px 6px !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { createGlobalStyle } from 'styled-components';
import color from 'color';
import RedwallColorPallete from 'color-pallete-component-module';
import Theming from 'theming-component-module';
import Color from 'color';
var theme = Theming.createThemeWithAppearance();
var defaultProps = {
  appearance: 'default',
  theme: {
    mode: 'light'
  }
};
export var ToastStyle = createGlobalStyle(_templateObject(), function (props) {
  return props.type === 'error' ? 'rgb(254, 66, 66)' : props.type === 'info' ? 'blue' : Color(theme(props).color(props)).string();
}, function (props) {
  return Color(theme(props).contrast(props)).grayscale().string();
}, function (props) {
  return Color(theme(props).contrast(props)).grayscale().fade(.3).string();
});
ToastStyle.defaultProps = defaultProps;