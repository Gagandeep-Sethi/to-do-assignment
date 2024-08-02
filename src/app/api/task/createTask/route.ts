import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import { getTokenData } from "@/helpers/getTokenData";
import Task from "@/models/taskModel";

connect();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, description, status, priority, deadline } = body;

    const userId = await getTokenData(req);

    const user = await User.findById(userId);
    if (!user) {
      throw new Error(`user not found`);
    }
    const task = await Task.create({
      title,
      description,
      status,
      priority,
      deadline,
      userId: user._id,
    });
    const response = NextResponse.json(
      { message: "Task created", task },
      { status: 200 }
    );

    return response;
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    } else {
      return NextResponse.json({ message: "server error" }, { status: 500 });
    }
  }
}
