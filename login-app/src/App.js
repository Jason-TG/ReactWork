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
      <NavTest />
      <Button> 버튼 </Button>
      <Button> 그냥 버튼 </Button>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/user" exact={true} component={UserPage} />
    </div>
  );
}

export default App;
