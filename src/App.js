import { React, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";

// Component
import PreviewPage from "./pages/PreviewPage";
import MainPage from "./pages/MainPage";
import PhonePage from "./pages/PhonePage";
import SuccessPage from "./pages/SuccessPage";
import MarketingPage from "./pages/MarketingPage";

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
        <DataProvider>
          <Switch>
            <Route path="/preview/:id">
              <PreviewPage />
            </Route>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/berhasil">
              <SuccessPage />
            </Route>
            <Route path="/marketing">
              <MarketingPage />
            </Route>
          </Switch>
        </DataProvider>
      ) : (
        <PhonePage />
      )}
    </div>
  );
}

export default App;
