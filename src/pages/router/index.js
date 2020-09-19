import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import VirtualKeyboard from "../virtual-keyboard";
import Home from "../home/index";
export default function () {
  const routes = [
    { path: "/virtual-keyboard", component: VirtualKeyboard },
    { path: "/", component: Home },
  ];
  const RoutesItems = routes.map((item) => {
    return (
      <div key={item.path}>
        <Link to={item.path}>{getPageName(item.path)}</Link>
      </div>
    );
  });
  const SwitchItems = routes.map((item) => {
    return (
      <Route key={item.path} path={item.path}>
        {item.component}
      </Route>
    );
  });

  return (
    <Router>
      <div>{RoutesItems}</div>
      <Switch>{SwitchItems}</Switch>
    </Router>
  );
}
function getPageName(name) {
  if (name === "/") {
    return "home";
  } else {
    return name.replace("/", "");
  }
}
