import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import routes from '../../routes/routes';
/*import { renderRoutes } from 'react-router-config';*/

class RouterConfig extends Component {
  render() {
    return (
      <div>
        <h2>Router Config</h2>
        {/*renderRoutes(routes)*/} 
        {routes.map((route) => {
          <h3>Data
            <Route
              path={route.path}
              exact={route.exact}
            >
              <route.component />
            </Route>
          </h3>
        })}
      </div>
    );
  }
}

export default RouterConfig;

