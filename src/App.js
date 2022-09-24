import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import HeaderMain from "./components/HeaderMain";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import { useState } from "react";

function App() {
  const [gotoSignUp, setGotoSignUp] = useState(false);
  return (
    <>{gotoSignUp ? <SignUp /> : <Landing setGotoSignUp={setGotoSignUp} />}</>
  );
}

export default App;
