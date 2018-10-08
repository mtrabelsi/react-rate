import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';
import styled from 'styled-components'

class App extends Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      feedback: '',
      ratingDone: false,
      open: false
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
  open() {
    this.setState((state, props) => {
      return {open: !state.open};
    });
  }
  render() {
    const { rating } = this.state;
    const { btnLabel, title, postRatingLabel } = this.props
    return (
      <div>
        <FloatingCercle onClick={this.open.bind(this)}>{this.state.open? 'X' : 'FDB'}</FloatingCercle>
        <div>
          {this.state.ratingDone ?  <BodyContainer>{postRatingLabel}</BodyContainer> : this.state.open && (<BodyContainer>
            <h2>{title}</h2>
            <StarRatingComponent 
              name="rate1" 
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
            <div><textarea value={this.state.feedback} onChange={this.onChange.bind(this)}></textarea></div>
            <div><button onClick={this.submit.bind(this)}>{btnLabel}</button></div>
          </BodyContainer>)}
        
        </div>
      </div>
    );
  }
}

const BodyContainer = styled.div`
  padding: 5px;
  border: 1px solid green;
  position: fixed;
  box-shadow:  0 0 10px  rgba(0,0,0,0.6);
  bottom: 130px;
  right: 40px;
`;

const FloatingCercle = styled.div`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:  0 0 10px  rgba(0,0,0,0.6);
  color: white;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
`;

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