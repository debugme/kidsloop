import { Switch, Route } from "react-router-dom";

import SignIn from "../../pages/signIn";
import CreateAccount from "../../pages/createAccount";
import ForgotPassword from "../../pages/forgotPassword";

import Help from "../../pages/help";
import Privacy from "../../pages/privacy";
import Terms from "../../pages/terms";

const Application = () => (
  <Switch>
    <Route path="/createAccount">
      <CreateAccount />
    </Route>
    <Route path="/forgotPassword">
      <ForgotPassword />
    </Route>
    <Route path="/help">
      <Help />
    </Route>
    <Route path="/privacy">
      <Privacy />
    </Route>
    <Route path="/terms">
      <Terms />
    </Route>
    <Route path="/">
      <SignIn />
    </Route>
  </Switch>
);

export default Application;
