"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var theming_component_module_1 = require("@redwallsolutions/theming-component-module");
var color_1 = __importDefault(require("color"));
var theme = theming_component_module_1.createThemeWithAppearance();
exports.ToastStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .iziToast {\n    background-color:  ", " !important;\n  }\n\n  .iziToast-title {\n    color: ", " !important;\n  }\n\n  .iziToast-message {\n    color: ", " !important;\n  }\n\n  .iziToast::after {\n    border-radius: 6px 6px 2px 2px !important;\n    box-shadow: inset 0 -10px 20px -10px rgba(0,0,0,0.2), inset 0 0 5px rgba(0,0,0,0.1), 0 8px 15px 0 rgba(0,0,0,0.1) !important;\n    transition: all .2s;\n  }\n\n  .iziToast:hover::after {\n    box-shadow: inset 0 -10px 20px -10px rgba(0,0,0,0.2), inset 0 0 5px rgba(0,0,0,0.1), 0 6px 12px -5px rgba(0,0,0,0.3) !important;\n  }\n\n  .iziToast-progressbar > div {\n    border-radius: 0 0 6px 6px !important;\n  }\n"], ["\n  .iziToast {\n    background-color:  ",
    " !important;\n  }\n\n  .iziToast-title {\n    color: ",
    " !important;\n  }\n\n  .iziToast-message {\n    color: ",
    " !important;\n  }\n\n  .iziToast::after {\n    border-radius: 6px 6px 2px 2px !important;\n    box-shadow: inset 0 -10px 20px -10px rgba(0,0,0,0.2), inset 0 0 5px rgba(0,0,0,0.1), 0 8px 15px 0 rgba(0,0,0,0.1) !important;\n    transition: all .2s;\n  }\n\n  .iziToast:hover::after {\n    box-shadow: inset 0 -10px 20px -10px rgba(0,0,0,0.2), inset 0 0 5px rgba(0,0,0,0.1), 0 6px 12px -5px rgba(0,0,0,0.3) !important;\n  }\n\n  .iziToast-progressbar > div {\n    border-radius: 0 0 6px 6px !important;\n  }\n"])), function (props) {
    return props.type === 'error'
        ? 'rgb(254, 66, 66)'
        : props.type === 'info'
            ? 'blue'
            : color_1.default(theme(props).color(props)).string();
}, function (props) {
    return color_1.default(theme(props).contrast(props))
        .grayscale()
        .string();
}, function (props) {
    return color_1.default(theme(props).contrast(props))
        .grayscale()
        .fade(0.3)
        .string();
});
var templateObject_1;
