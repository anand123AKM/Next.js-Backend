import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connection from "@/lib/db";
import { Product } from "@/lib/model/product";

export async function PUT(req, res) {
  try {
    const productid = res.params.productid;
    const filter = { _id: productid };
    const payload = await req.json();

    if (!connection) {
      throw new Error("Database connection string is missing");
    }

    await mongoose.connect(connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const result = await Product.findOneAndUpdate(filter, payload);
    return NextResponse.json({ result, message: "PUT request received" });
  } catch (error) {
    console.error("Database connection error:", error.message);
    console.error(error.stack);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(req, res) {
  try {
    const productid = res.params.productid;
    const record = { _id: productid };

    if (!connection) {
      throw new Error("Database connection string is missing");
    }

    await mongoose.connect(connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const result = await Product.findById(record);
    return NextResponse.json({ result, message: "PUT request received" });
  } catch (error) {
    console.error("Database connection error:", error.message);
    console.error(error.stack);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, res) {
  const productid = res.params.productid;
  const record = { _id: productid };
  await mongoose.connect(connection);
  const result = await Product.deleteOne(record);

  return NextResponse.json({ result, message: "DELETE request received" });
}
