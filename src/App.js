import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container">
        <TextArea header="Enter text to analyze" />
      </div>
    </>
  );
}

export default App;
