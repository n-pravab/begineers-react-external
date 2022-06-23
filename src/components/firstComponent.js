import React from "react";

const First = ({ title, name, age, gender, subjects, location }) => {
  console.log("first ");
  return (
    <div>
      <h1>'m first component</h1>
      <h2>{title}</h2>
      <p>
        this is to show that{" "}
        <strong>
          {gender === "M" ? "Mr" : "Ms"}. <i>{name}</i>,{" "}
        </strong>
        aged {age} has passed in the following subjects{" "}
        <ul>
          {subjects.map((s) => (
            <li>{s}</li>
          ))}
        </ul>
        <p>
          His address in our record is {location.latitude} N,{" "}
          {location.longitude} S
        </p>
      </p>
    </div>
  );
};
const Second = () => {
  console.log("Second component");
  return (
    <div>
      <h1>This is second component</h1>
    </div>
  );
};

export { Second };
export default First;
