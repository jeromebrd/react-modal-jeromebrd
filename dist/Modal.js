"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = Modal;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Modal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Modal(_ref) {
  let {
    onClose,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'modal-overlay'
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "confirmation",
    className: 'modal-content'
  }, children, /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClose,
    className: `modal-close-button`
  }, "\u2715 ")));
}
Modal.propTypes = {
  onClose: _propTypes.default.func.isRequired,
  children: _propTypes.default.string
};