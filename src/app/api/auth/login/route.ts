import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";

connect();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;
    if (!email || !password) {
      throw new Error("All fields must be filed");
    }
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Incorrect username or password !!");
    }
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new Error("Incorrect username or password !!");
    }
    return NextResponse.json(
      { username: user.username, userId: user._id },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    } else {
      return NextResponse.json({ message: "server error" }, { status: 500 });
    }
  }
}
