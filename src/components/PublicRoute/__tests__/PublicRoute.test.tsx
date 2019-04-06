import { PureComponent as PublicRoute } from '../PublicRoute';
import React from 'react';
import { shallow, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

const TestComponent = () => <h1>test component</h1>;

describe('PrivateRoute', () => {
  it('renders without crashing', () => {
    shallow(<PublicRoute path="" isAuthenticated />);
    render(
      <MemoryRouter initialEntries={['']}>
        <PublicRoute path="" isAuthenticated component={TestComponent} />
      </MemoryRouter>,
    );
    render(
      <MemoryRouter initialEntries={['']}>
        <PublicRoute
          path=""
          isAuthenticated={false}
          component={TestComponent}
        />
      </MemoryRouter>,
    );
  });
  it('matches authenticated snapshot', () => {
    const wrapper = shallow(
      <PublicRoute path="" isAuthenticated component={<h1>Test</h1>} />,
    );
    expect(wrapper).toMatchSnapshot('authenticated');
  });
  it('matches unauthenticated snapshot', () => {
    const wrapper = shallow(
      <PublicRoute path="" isAuthenticated={false} component={<h1>Test</h1>} />,
    );
    expect(wrapper).toMatchSnapshot('unauthenticated');
  });
});
