import * as React from 'react';
import { shallow } from 'enzyme';
import IndexPage from '../IndexPage';

describe('IndexPage', () => {
  it('renders without crashing', () => {
    shallow(<IndexPage />);
  });
});
