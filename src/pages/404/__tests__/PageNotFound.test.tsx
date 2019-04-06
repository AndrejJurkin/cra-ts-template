import * as React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from '../PageNotFound';

describe('PageNotFound', () => {
  it('renders without crashing', () => {
    shallow(<PageNotFound />);
  });
});
