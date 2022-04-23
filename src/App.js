import './App.css';
import RoutingDom from './components/RoutingDom/RoutingDom';
import RouterConfig from './components/RouterConfig/RouterConfig';
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <RouterConfig />
        <hr />
        <RoutingDom />
      </Router>
    </div>
  );
}

export default App;
