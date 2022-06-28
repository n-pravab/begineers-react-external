import React, { useState, useRef } from "react";
import { VscTrash } from "react-icons/vsc";
import { AiTwotoneEdit } from "react-icons/ai";

const Register = ({ batch, faculty, college, students }) => {
  const [entries, setEntries] = useState(students);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [editMode, setEditMode] = useState(false);

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
      handleAddEntry();
      nameRef.current.focus();
    } else if (e.code === "ArrowRight") {
      nameRef.current.focus();
    } else if (e.code === "ArrowLeft") {
      dobRef.current.focus();
    }
  };
  const handleAddEntry = () => {
    if (!editMode) {
      setEntries([
        ...entries,
        {
          name: name,
          dob: dob,
          address: address,
          id: entries.length + 1,
        },
      ]);
    } else {
      setEntries(
        entries.map((en) =>
          en.id === selectedEntry.id ? { ...en, name, dob, address } : en
        )
      );
      setEditMode(false);
      setSelectedEntry(null);
    }
    setName("");
    setDob("");
    setAddress("");
    nameRef.current.focus();
  };
  const handleRemoveEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };
  const handleEditEntry = (entry) => {
    setEditMode(true);
    setSelectedEntry(entry);
    setName(entry.name);
    setDob(entry.dob);
    setAddress(entry.address);
  };
  const handleCancelEdit = () => {
    setEditMode(false);
    setSelectedEntry(null);
    setName("");
    setDob("");
    setAddress("");
    nameRef.current.focus();
  };
  return (
    <div>
      <h1>{college}</h1>
      <p>
        {faculty}-{batch}
      </p>
      <ul>
        {entries.map((s) => (
          <li
            key={s.id}
            className={selectedEntry?.id === s.id ? "selected-entry" : ""}
          >
            <span>{s.name} </span>
            <span>{s.dob} </span>
            <span>{s.address}</span>
            <VscTrash
              color="red"
              onClick={() => {
                handleRemoveEntry(s.id);
              }}
            />
            <AiTwotoneEdit
              color="blue"
              size={15}
              onClick={() => handleEditEntry(s)}
            />
          </li>
        ))}
      </ul>
      <button onClick={() => setEntries([])}>Clearall</button>
      <input
        placeholder="Enter name"
        ref={nameRef}
        onKeyUp={handlePressEnterAtName}
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        placeholder="date of birth"
        type="date"
        ref={dobRef}
        onKeyUp={handlePressEnterAtDob}
        onChange={(e) => setDob(e.target.value)}
        value={dob}
      />
      <input
        placeholder="address"
        ref={addressRef}
        onKeyUp={handlePressEnterAtAddress}
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      />
      <button onClick={handleAddEntry}>{editMode ? "Save" : `+Add`}</button>
      {editMode ? <button onClick={handleCancelEdit}>Cancel</button> : null}

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
