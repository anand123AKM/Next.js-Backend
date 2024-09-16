"use client";
import React, { useState } from "react";
import "./addUser.css";

function AddUserPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const AddUser = async (event) => {
    event.preventDefault();
    const userData = { name, email, age, phone, address };

    let response = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    alert("user added successfully");
    console.log("Response:", data);
    setAddress("");
    setEmail("");
    setName("");
    setAge("");
    setPhone("");
  };

  return (
    <>
      <h1>Add Users</h1>
      <form className="form" onSubmit={AddUser}>
        <label>
          Name:
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            value={age}
            type="number"
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            value={phone}
            type="text"
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            value={address}
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}

export default AddUserPage;
