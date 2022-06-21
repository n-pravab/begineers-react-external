import React from "react";

const First = (props) => {
  console.log("first props", props);
  return (
    <div>
      <h1>'m first component</h1>
      <h2>{props.title}</h2>
      <p>
        this is to show that{" "}
        <strong>
          {props.gender === "M" ? "Mr" : "Ms"}. <i>{props.name}</i>,{" "}
        </strong>
        aged {props.age} has passed in the following subjects{" "}
        <ul>
          {props.subjects.map((s) => (
            <li>{s}</li>
          ))}
        </ul>
        <p>
          His address in our record is {props.location.latitude} N,{" "}
          {props.location.longitude} S
        </p>
      </p>
    </div>
  );
};

export default First;
