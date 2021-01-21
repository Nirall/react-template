import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from '../blocks/Greeting/Greeting';

const App = () => (
  <>
    <Greeting name="user" />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
