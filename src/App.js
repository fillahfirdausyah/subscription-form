import { React, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./Context/AuthContext";
import PrivateRoute from "./component/PrivateRoute";

// Component
import PreviewPage from "./pages/PreviewPage";
import MainPage from "./pages/MainPage";
import PhonePage from "./pages/PhonePage";
import SuccessPage from "./pages/SuccessPage";
import MarketingPage from "./pages/MarketingPage";
import LengkapiPage from "./pages/LengkapiPage";
import Login from "./component/Login";
import SignUp from "./component/SignUp";

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
        <AuthProvider>
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
            <PrivateRoute path="/marketing" component={MarketingPage} />
            <Route path="/lengkapi/:id">
              <LengkapiPage />
            </Route>
            <Route path="/login">
              <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
              >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  <Login />
                </div>
              </Container>
            </Route>
            <Route path="/signup">
              <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
              >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  <SignUp />
                </div>
              </Container>
            </Route>
          </Switch>
        </AuthProvider>
      ) : (
        <PhonePage />
      )}
    </div>
  );
}

export default App;
