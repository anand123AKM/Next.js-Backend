import React from "react";
import Link from "next/link";

function page() {
  return (
    <>
      <div>
        <h1
          style={{
            marginRight: "20px",
            fontSize: "20px",
            color: "white",
            padding: "10px",
            backgroundColor: "black",
            textAlign: "center",
          }}
        >
          Home
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <div>
          <Link
            style={{
              marginRight: "20px",
              fontSize: "20px",
              color: "white",
              padding: "10px",
              backgroundColor: "black",
            }}
            href="/Addproduct"
          >
            Addproduct
          </Link>
        </div>
        <div>
          <Link
            style={{
              marginRight: "20px",
              fontSize: "20px",
              color: "white",
              padding: "10px",
              backgroundColor: "black",
            }}
            href="/api/products"
          >
            Product
          </Link>
        </div>

        <div>
          <Link
            style={{
              marginRight: "20px",
              fontSize: "20px",
              color: "white",
              padding: "10px",
              backgroundColor: "black",
            }}
            href="/api/product"
          >
            Product
          </Link>
        </div>

        <div>
          <Link
            style={{
              marginRight: "20px",
              fontSize: "20px",
              color: "white",
              padding: "10px",
              backgroundColor: "black",
            }}
            href="/UserList"
          >
            Users
          </Link>
        </div>
      </div>
    </>
  );
}

export default page;
