import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div>
      <Nav />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/user" exact={true} component={UserPage} />
    </div>
  );
}

export default App;
