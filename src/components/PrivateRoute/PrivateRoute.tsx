import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import routes from '../../constants/routes';
import * as React from 'react';
import { AppState } from '../../reducers/rootReducer';

interface Props {
  path: string;
  isAuthenticated?: boolean;
  component?: any;
  rest?: any;
  exact?: boolean;
}

export const PrivateRoute = ({
  isAuthenticated,
  component,
  ...rest
}: Props) => {
  const Component = component;
  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? (
          // User is authenticated, route to the component
          <Component {...props} />
        ) : (
          // User is not authenticated, route to the login page
          <Redirect to={routes.login} />
        )
      }
    />
  );
};

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: false,
});

export const PureComponent = PrivateRoute;

export default connect(mapStateToProps)(PrivateRoute);
