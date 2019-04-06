import { PureComponent as PrivateRoute } from '../PrivateRoute';
import React from 'react';
import { shallow, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

const TestComponent = () => <h1>test component</h1>;

describe('PrivateRoute', () => {
  it('renders without crashing', () => {
    shallow(<PrivateRoute path="" isAuthenticated />);
    render(
      <MemoryRouter initialEntries={['']}>
        <PrivateRoute path="" isAuthenticated component={TestComponent} />
      </MemoryRouter>,
    );
    render(
      <MemoryRouter initialEntries={['']}>
        <PrivateRoute
          path=""
          isAuthenticated={false}
          component={TestComponent}
        />
      </MemoryRouter>,
    );
  });
  it('matches authenticated snapshot', () => {
    const wrapper = shallow(
      <PrivateRoute path="" isAuthenticated component={<h1>Test</h1>} />,
    );
    expect(wrapper).toMatchSnapshot('authenticated');
  });
  it('matches unauthenticated snapshot', () => {
    const wrapper = shallow(
      <PrivateRoute
        path=""
        isAuthenticated={false}
        component={<h1>Test</h1>}
      />,
    );
    expect(wrapper).toMatchSnapshot('unauthenticated');
  });
});
