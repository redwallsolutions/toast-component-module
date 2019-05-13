import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.css';
import { ToastStyle } from './Style';

var Toast =
/*#__PURE__*/
function (_Component) {
  _inherits(Toast, _Component);

  function Toast() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Toast);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Toast)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      type: 'default'
    };

    _this.exposeController = function () {
      return {
        default: _this.open,
        error: _this.error
      };
    };

    _this.open = function (options) {
      izitoast.show(options);
    };

    _this.error = function (options) {
      _this.setState({
        type: 'error'
      });

      _this.open(options);
    };

    return _this;
  }

  _createClass(Toast, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      izitoast.settings({
        closeOnEscape: true,
        closeOnClick: true,
        displayMode: 2,
        position: 'bottomCenter'
      });

      if (this.props.getToastController) {
        this.props.getToastController(this.exposeController());
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(ToastStyle, Object.assign({}, this.props, {
        type: this.state.type
      }));
    }
  }]);

  return Toast;
}(Component);

Toast.defaultProps = {
  appearance: 'default',
  theme: {
    mode: 'light'
  }
};
export default withTheme(Toast);