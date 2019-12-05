"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = require("styled-components");
var izitoast_1 = __importDefault(require("izitoast"));
require("izitoast/dist/css/iziToast.css");
var Style_1 = require("./Style");
var Toast = function (_a) {
    var type = _a.type, getToastController = _a.getToastController, _b = _a.theme, theme = _b === void 0 ? { mode: 'light' } : _b, _c = _a.appearance, appearance = _c === void 0 ? 'default' : _c;
    var themeToApply = react_1.useContext(styled_components_1.ThemeContext) || theme;
    var open = function (options) {
        izitoast_1.default.show(options);
    };
    react_1.useEffect(function () {
        izitoast_1.default.settings({
            closeOnEscape: true,
            closeOnClick: true,
            displayMode: 2,
            position: 'bottomCenter'
        });
        if (getToastController) {
            getToastController({ open: open });
        }
    }, []);
    return react_1.default.createElement(Style_1.ToastStyle, { type: type, appearance: appearance, theme: themeToApply });
};
exports.default = Toast;
