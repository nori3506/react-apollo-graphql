import "./App.css";
import Addcontact from "./components/form/AddContact";
import Title from "./components/layouts/Title";

const App = () => {
  return (
    <div className="App">
      <Title />
      <Addcontact />
    </div>
  );
};

export default App;
