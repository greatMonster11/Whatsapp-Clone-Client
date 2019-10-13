import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mockApolloClient } from './test-helpers';
import * as subscriptions from './graphql/subscriptions';

it('renders without crashing', () => {
  const client = mockApolloClient([
    {
      request: { query: subscriptions.messageAdded },
      result: { data: {} },
    },
  ]);
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
