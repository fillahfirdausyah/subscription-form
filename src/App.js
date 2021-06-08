import React from "react";
import PreviewPage from "./pages/PreviewPage";
import MainPage from "./pages/MainPage";
import { Switch, Route } from "react-router-dom";

const ref = React.createRef();

function App() {
  return (
    <div>
      <Switch>
        <Route path="/preview">
          <PreviewPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
