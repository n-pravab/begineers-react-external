import React from "react";

const Register = ({ batch, faculty, college, students }) => {
  return (
    <div>
      <h1>{college}</h1>
      <p>
        {faculty}-{batch}
      </p>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            <span>{s.name}</span>
            <span>{s.dob}</span>
            <span>{s.address}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Register;
