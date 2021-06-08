import { React, useState, useEffect } from "react";
import PreviewPage from "./pages/PreviewPage";
import MainPage from "./pages/MainPage";
import PhonePage from "./pages/PhonePage";
import { Switch, Route } from "react-router-dom";

function App() {
  const [layar, setLayar] = useState(window.innerWidth);

  const updateLayar = () => {
    setLayar(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateLayar);
    return () => {
      window.addEventListener("resize", updateLayar);
    };
  }, []);

  return (
    <div>
      {layar > 768 ? (
        <Switch>
          <Route path="/preview">
            <PreviewPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      ) : (
        <PhonePage />
      )}
    </div>
  );
}

export default App;
