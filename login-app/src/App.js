import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import Nav from "./components/Header";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import { Button } from "antd";
import NavTest from "./components/NavTest";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/user" exact={true} component={UserPage} />
      <Route path="/user" exact={true} component={UserPage} />
    </div>
  );
}

export default App;
