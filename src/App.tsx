import React from 'react';
import compose from 'recompose/compose';
import createHistory from 'history/createBrowserHistory';
import { Router, Switch } from 'react-router-dom';
import routes from './constants/routes';
import { Route } from 'react-router';
import IndexPage from './pages/IndexPage/IndexPage';
import PageNotFound from './pages/404/PageNotFound';
import { initAuthState } from './actions/auth';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const history = createHistory();

interface ParentProps {
  initAuthState: () => void;
}

type Props = Partial<ParentProps>;

function App() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path={routes.index} component={IndexPage} exact />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

const mapDispatchToProps = {
  initAuthState,
};

const enhance = compose<Props, any>(
  connect(
    null,
    mapDispatchToProps,
  ),
);

export default enhance(App);
