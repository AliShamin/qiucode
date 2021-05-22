import "./App.css";
import QiuCodeMain from "../src/components/QiuCodeMain/QiuCodeMain";
import QiuCodeSignin from "../src/components/QiuCodeSignin/QiuCodeSignin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <QiuCodeSignin />
        </Route>
        <Route path="/main">
          <QiuCodeMain />
        </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
