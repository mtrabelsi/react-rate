'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStarRatingComponent = require('react-star-rating-component');

var _reactStarRatingComponent2 = _interopRequireDefault(_reactStarRatingComponent);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      rating: 0,
      feedback: '',
      ratingDone: false,
      open: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'onStarClick',
    value: function onStarClick(nextValue, prevValue, name) {
      this.setState({ rating: nextValue });
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      var feedback = e.target.value;
      this.setState({ feedback: feedback });
    }
  }, {
    key: 'submit',
    value: function submit() {
      var submitFn = this.props.submitFn;
      this.setState({ ratingDone: true });
      submitFn(this.state.rating, this.state.feedback);
    }
  }, {
    key: 'open',
    value: function open() {
      this.setState(function (state, props) {
        return { open: !state.open };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var rating = this.state.rating;
      var _props = this.props,
          btnLabel = _props.btnLabel,
          title = _props.title,
          postRatingLabel = _props.postRatingLabel;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          FloatingCercle,
          { onClick: this.open.bind(this) },
          this.state.open ? 'X' : 'FDB'
        ),
        _react2.default.createElement(
          'div',
          null,
          this.state.ratingDone ? _react2.default.createElement(
            BodyContainer,
            null,
            postRatingLabel
          ) : this.state.open && _react2.default.createElement(
            BodyContainer,
            null,
            _react2.default.createElement(
              'h2',
              null,
              title
            ),
            _react2.default.createElement(_reactStarRatingComponent2.default, {
              name: 'rate1',
              starCount: 5,
              value: rating,
              onStarClick: this.onStarClick.bind(this)
            }),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('textarea', { value: this.state.feedback, onChange: this.onChange.bind(this) })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'button',
                { onClick: this.submit.bind(this) },
                btnLabel
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var BodyContainer = _styledComponents2.default.div.withConfig({
  displayName: 'lib__BodyContainer',
  componentId: 'v6994q-0'
})(['padding:5px;border:1px solid green;position:fixed;box-shadow:0 0 10px  rgba(0,0,0,0.6);bottom:130px;right:40px;']);

var FloatingCercle = _styledComponents2.default.div.withConfig({
  displayName: 'lib__FloatingCercle',
  componentId: 'v6994q-1'
})(['border-radius:50%;width:70px;height:70px;background-color:green;display:flex;justify-content:center;align-items:center;box-shadow:0 0 10px  rgba(0,0,0,0.6);color:white;position:fixed;bottom:40px;right:40px;cursor:pointer;']);

App.propTypes = {
  btnLabel: _propTypes2.default.string,
  title: _propTypes2.default.string,
  postRatingLabel: _propTypes2.default.string

};

App.defaultProps = {
  postRatingLabel: 'Rating submitted.',
  title: 'Your feedback',
  btnLabel: 'Submit',
  submitFn: function submitFn() {
    return alert("sounds like you haven't passed any 'submitFn' callback via props!, this is a default callback is called!");
  }
};

exports.default = App;