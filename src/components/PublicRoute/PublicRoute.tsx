import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import routes from '../../constants/routes';

interface Props {
  isAuthenticated?: boolean;
  component?: any;
  rest?: any;
  path: string;
}

const PublicRoute = ({ isAuthenticated, component, ...rest }: Props) => {
  const Component = component;
  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? (
          <Redirect to={routes.index} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export const PureComponent = PublicRoute;

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.token,
});

export default connect(mapStateToProps)(PublicRoute);
