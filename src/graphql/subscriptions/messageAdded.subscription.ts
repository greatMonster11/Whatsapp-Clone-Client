import gql from 'graphql-tag';
import * as fragments from '../fragments';

export default gql`
  subscription MessageAdded {
    MessageAdded {
      ...Message
    }
  }
  ${fragments.message}
`;
