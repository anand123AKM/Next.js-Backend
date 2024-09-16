import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connection from "../../../lib/db";
import { Product } from "../../../lib/model/product";

export async function GET() {
  try {
    if (!connection) {
      throw new Error("Database connection string is missing");
    }

    await mongoose.connect(connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const data = await Product.find();
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Database connection error:", error.message);
    console.error(error.stack);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connection);
  let product = new Product(payload);
  const result = await product.save();
  return NextResponse.json({ result });
}
