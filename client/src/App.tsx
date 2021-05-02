import styles from "./App.module.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Main from "./pages/Main";
import PrivateRoute from "./components/redirect/PrivateRoute";
import PublicRoute from "./components/redirect/PublicRoute";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            isAuthenticated={false}
            component={Main}
          />
          <PublicRoute
            path="/signup"
            isAuthenticated={false}
            component={SignUp}
          />
          <PublicRoute
            path="/login"
            isAuthenticated={false}
            component={LogIn}
          />
          <PublicRoute
            path="/welcome"
            isAuthenticated={false}
            component={Landing}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
