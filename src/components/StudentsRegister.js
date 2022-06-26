import React, { useState, useRef } from "react";

const Register = ({ batch, faculty, college, students }) => {
  const [entries, setEntries] = useState(students);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");

  const nameRef = useRef(null);
  const dobRef = useRef(null);
  const addressRef = useRef(null);

  const handlePressEnterAtName = (e) => {
    console.log("press enter");
    if (e.code === "Enter") {
      dobRef.current.focus();
    } else if (e.code === "ArrowRight") {
      dobRef.current.focus();
    } else if (e.code === "ArrowLeft") {
      addressRef.current.focus();
    }
  };
  const handlePressEnterAtDob = (e) => {
    console.log("press enter");
    if (e.code === "Enter") {
      addressRef.current.focus();
    } else if (e.code === "ArrowRight") {
      addressRef.current.focus();
    } else if (e.code === "ArrowLeft") {
      nameRef.current.focus();
    }
  };
  const handlePressEnterAtAddress = (e) => {
    console.log("press enter");
    if (e.code === "Enter") {
      setEntries([
        ...entries,
        {
          name: name,
          dob: dob,
          address: address,
          id: entries.length + 1,
        },
      ]);
      setName("");
      setDob("");
      setAddress("");
      nameRef.current.focus();
    } else if (e.code === "ArrowRight") {
      nameRef.current.focus();
    } else if (e.code === "ArrowLeft") {
      dobRef.current.focus();
    }
  };
  return (
    <div>
      <h1>{college}</h1>
      <p>
        {faculty}-{batch}
      </p>
      <ul>
        {entries.map((s) => (
          <li key={s.id}>
            <span>{s.name} </span>
            <span>{s.dob} </span>
            <span>{s.address}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          setEntries([
            ...entries,
            {
              name: name,
              dob: dob,
              address: address,
              id: entries.length + 1,
            },
          ]);
          setName("");
          setDob("");
          setAddress("");
        }}
      >
        +Add
      </button>
      <button onClick={() => setEntries([])}>Clearall</button>
      <input
        ref={nameRef}
        onKeyUp={handlePressEnterAtName}
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        ref={dobRef}
        onKeyUp={handlePressEnterAtDob}
        onChange={(e) => setDob(e.target.value)}
        value={dob}
      />
      <input
        ref={addressRef}
        onKeyUp={handlePressEnterAtAddress}
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      />

      <form>
        <input
          type="button"
          onChange={(event) => console.log(event.target.value)}
        />
        <input type="checkbox" onChange={(event) => console.log(event)} />
        <input type="color" onChange={(event) => console.log(event)} />
        <input type="date" onChange={(event) => console.log(event)} />
        <input type="datetime-local" onChange={(event) => console.log(event)} />
        <input type="email" onChange={(event) => console.log(event)} />
        <input type="file" onChange={(event) => console.log(event)} />
        <input
          type="hidden"
          onChange={(event) => console.log(event.target.value)}
        />
        {/* <input type="image" /> */}
        <input
          type="month"
          onChange={(event) => console.log(event.target.value)}
        />
        <input
          type="number"
          onChange={(event) => console.log(event.target.value)}
        />
        <input
          type="password"
          onChange={(event) => console.log(event.target.value)}
        />
        <input
          type="radio"
          onChange={(event) => console.log(event.target.value)}
        />
        <input
          type="range"
          onChange={(event) => console.log(event.target.value)}
        />
        <input
          type="reset"
          onChange={(event) => console.log(event.target.value)}
        />
        <input
          type="search"
          onChange={(event) => console.log(event.target.value)}
        />
        <input
          type="submit"
          onChange={(event) => console.log(event.target.value)}
        />
        <input
          type="tel"
          onChange={(event) => console.log(event.target.value)}
        />
        <input
          type="text"
          onChange={(event) => console.log(event.target.value)}
          onKeyUp={(event) => console.log(event)}
        />
        <input
          type="time"
          onChange={(event) => console.log(event.target.value)}
        />
        <input
          type="url"
          onChange={(event) => console.log(event.target.value)}
        />
        <input
          type="week"
          onChange={(event) => console.log(event.target.value)}
        />
      </form>
    </div>
  );
};

export default Register;
