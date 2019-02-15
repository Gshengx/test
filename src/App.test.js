import React from 'react';
import ReactDOM from 'react-dom';
import ReactRout from './router/router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactRout />, div);
  ReactDOM.unmountComponentAtNode(div);
});
