import React, { useState } from "react";

const Register = ({ batch, faculty, college, students }) => {
  const [entries, setEntries] = useState(students);
  return (
    <div>
      <h1>{college}</h1>
      <p>
        {faculty}-{batch}
      </p>
      <ul>
        {entries.map((s) => (
          <li key={s.id}>
            <span>{s.name}</span>
            <span>{s.dob}</span>
            <span>{s.address}</span>
          </li>
        ))}
      </ul>
      <button onClick={() => setEntries([...entries])}>+Add</button>
      <button onClick={() => setEntries([])}>Clearall</button>
    </div>
  );
};

export default Register;
