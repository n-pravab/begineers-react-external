import logo from "./logo.svg";
import "./App.css";
import First from "./components/firstComponent";

function App(props) {
  console.log(props, "App props");
  return (
    <div className="App">
      <First
        title={"This is the first component title"}
        name={"Somebody"}
        age={22}
        subjects={["Physics", "em", "chemistry", "Thermo"]}
        gender={"M"}
        location={{ latitude: 232.3424, longitude: 454.45 }}
        isStudent={true}
      />
    </div>
  );
}

export default App;
