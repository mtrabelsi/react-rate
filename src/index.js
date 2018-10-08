import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Feedback from './lib'

ReactDOM.render((<div>
  <Feedback title="this is a custom title"
            btnLabel="custom button label"
            postRatingLabel="Rating has been submitted! we will get back to you soon"
            submitFn={(rate, feedback) => alert(`this is custom submit fn, typed values: <${rate}, ${feedback}>`)} />
  </div>), document.getElementById('root'));
registerServiceWorker();
