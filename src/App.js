import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import {
  Route,
  index,
  layout,
  prefix,
  BrowserRouter,
  Routes,
} from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");
  const [btnText, setBtnText] = useState("Dark Mode");
  const [clsLabel, setClsLabel] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      setBtnText("Dark Mode");
      setClsLabel("dark");
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = "#FFFFFF";
    } else {
      setTheme("dark");
      setBtnText("Light Mode");
      setClsLabel("light");
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = "#2B3035";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          theme={theme}
          toogleTheme={handleTheme}
          btnText={btnText}
          clsLabel={clsLabel}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextArea
                header="Enter text to analyze"
                theme={theme}
                clsLabel={clsLabel}
                showAlert={showAlert}
                style={{
                  color: theme === "dark" ? "#FFFFFF" : "#2B3035",
                }}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                theme={theme}
                style={{
                  color: theme === "dark" ? "#FFFFFF" : "#2B3035",
                }}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
