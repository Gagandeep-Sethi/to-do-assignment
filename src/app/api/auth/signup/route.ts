import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

connect();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, password, email } = body;
    if (!username || !password || !email) {
      throw new Error("All fields must be filed");
    }
    const userNameExist = await User.findOne({ username });
    if (userNameExist) {
      throw new Error(`(${username}) this username is already taken`);
    }
    const userEmailExist = await User.findOne({ email });
    if (userEmailExist) {
      throw new Error(`(${email}) this email is already a user`);
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      email,
      username,
      password: hashPassword,
    });
    return NextResponse.json(
      { username: user.username, userId: user._id },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    } else {
      return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
  }
}
