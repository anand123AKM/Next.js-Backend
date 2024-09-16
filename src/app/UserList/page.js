"use client";
import { useEffect, useState } from "react";

const getProducts = async () => {
  try {
    let response = await fetch("http://localhost:3000/api/product");
    let data = await response.json();
    console.log("Fetched data from API:", data);
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
    }

    fetchData();
  }, []);

  console.log("Products to display:", products);
  if (!Array.isArray(products)) {
    console.error("Products is not an array:", products);
    return <div>Error: Products is not an array</div>;
  }

  const deleteProduct = async (id) => {
    try {
      let response = await fetch(`http://localhost:3000/api/product/${id}`, {
        method: "DELETE",
      });
      let data = await response.json();
      console.log("Deleted product:", data);
      if (data.result) {
        alert("Product deleted successfully");
        setProducts(products.filter((product) => product._id !== id));
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <div>
        <h1>Users List</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id || product.email}>
                <td>{product.name}</td>
                <td>{product.email}</td>
                <td>{product.age}</td>
                <td>{product.phone}</td>
                <td>{product.address}</td>
                <td>
                  <a href={`UserList/${product._id}`}>Edit</a>
                </td>
                <td>
                  <button onClick={() => deleteProduct(product._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
