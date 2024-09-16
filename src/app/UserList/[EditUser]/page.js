"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Page(params) {
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    address: "",
  });
  const id = params.params.EditUser;
  const router = useRouter();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/product/${id}`);
      const data = await response.json();
      console.log(data);
      setUserData(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/product/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        alert("User updated successfully");
        router.push("/UserList");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h1>User Details Edit</h1>
      </div>
      <div>
        <form className="forms">
          <label>
            Name:
            <input
              value={userdata.name}
              type="text"
              name="name"
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              value={userdata.email}
              type="email"
              name="email"
              onChange={handleChange}
            />
          </label>
          <label>
            Age:
            <input
              value={userdata.age}
              type="number"
              name="age"
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              value={userdata.phone}
              type="tel"
              name="phone"
              onChange={handleChange}
            />
          </label>
          <label>
            Address:
            <input
              value={userdata.address}
              type="text"
              name="address"
              onChange={handleChange}
            />
          </label>
          <button onClick={updateUser}>Update</button>
        </form>
      </div>
    </div>
  );
}

export default Page;
