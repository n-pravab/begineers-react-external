import logo from "./logo.svg";
import "./App.css";
import First, { Second } from "./components/firstComponent";
import Register from "./components/StudentsRegister";
import { STUDENTS } from "./constants";
import Counter from "./components/counter";

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
      <Second />
      <Register
        batch={"075"}
        faculty={"BCT"}
        college={"KEC"}
        students={STUDENTS}
      />
      <Counter />
    </div>
  );
}

export default App;
