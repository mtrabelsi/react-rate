import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rating: 1,
      feedback: ''
    };
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
  onChange(e) {
    const feedback = e.target.value
    this.setState({ feedback })
  }
  submit() {
    const submitFn = this.props.submitFn
    submitFn(this.state.rating, this.state.feedback)
  }
  render() {
    const { rating } = this.state;
    const { btnLabel, title } = this.props
    return (
      <div>
        <div className="container">
          <h2>{title}</h2>
          <StarRatingComponent 
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
          />
          <div><textarea value={this.state.feedback} onChange={this.onChange.bind(this)}></textarea></div>
          <div><button onClick={this.submit.bind(this)}>{btnLabel}</button></div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  btnLabel: PropTypes.string,
  title: PropTypes.string
};

App.defaultProps = {
  title: 'Your feedback',
  btnLabel: 'Submit',
  submitFn: () => alert("sounds like you haven't passed any 'submitFn' callback via props!, this is a default callback is called!")
};

export default App