import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TexthtmlForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  // toggle1

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2e3f60";
      showAlert("Dark mode has been enabled", "Success:");
      document.title = "textutils - Dark Mode";
      // setInterval(() => {
      //   document.title = "textutils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success:");
      document.title = "textutils - light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title = "Textutils" aboutText = "About TextUitls"/> */}
      {/* <Navbar/> */}
      {/* <Router>
        /user --> Component 1 
            /user/home --> Component 2 
          <Switch>
            <Route exact path="/about"><About /></Route> 
            <Route exact path="/">
              </Route>
          </Switch>
      </Router> */}

      <Navbar title="Textutils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TexthtmlForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode} />
      </div>
    </>
  );
}

export default App;
