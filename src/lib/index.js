import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      feedback: '',
      ratingDone: false
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
    this.setState({ ratingDone: true })
    submitFn(this.state.rating, this.state.feedback)
  }
  render() {
    const { rating } = this.state;
    const { btnLabel, title, postRatingLabel } = this.props
    return (
      <div>
        <div className="container">
          {this.state.ratingDone ? <div>{postRatingLabel}</div> : (<div>
            <h2>{title}</h2>
            <StarRatingComponent 
              name="rate1" 
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
            <div><textarea value={this.state.feedback} onChange={this.onChange.bind(this)}></textarea></div>
            <div><button onClick={this.submit.bind(this)}>{btnLabel}</button></div>
          </div>)}
        
        </div>
      </div>
    );
  }
}

App.propTypes = {
  btnLabel: PropTypes.string,
  title: PropTypes.string,
  postRatingLabel: PropTypes.string

};

App.defaultProps = {
  postRatingLabel: 'Rating submitted.',
  title: 'Your feedback',
  btnLabel: 'Submit',
  submitFn: () => alert("sounds like you haven't passed any 'submitFn' callback via props!, this is a default callback is called!")
};

export default App