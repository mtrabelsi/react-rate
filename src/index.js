import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Feedback from './lib'

ReactDOM.render((<div>
  <Feedback />
  <hr />
  <Feedback title="this is a custom title"
            btnLabel="custom button label"
            submitFn={(rate, feedback) => alert(`this is custom submit fn, typed values: <${rate}, ${feedback}>`)} />
  </div>), document.getElementById('root'));
registerServiceWorker();
