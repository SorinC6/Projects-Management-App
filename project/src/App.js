import React from "react";
import "./App.css";
import NavBar from "./components/layout/Navbar";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
