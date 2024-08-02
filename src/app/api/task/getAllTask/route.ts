import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import { getTokenData } from "@/helpers/getTokenData";
import Task from "@/models/taskModel";

connect();

export async function GET(req: NextRequest) {
  try {
    const userId = await getTokenData(req);

    const user = await User.findById(userId);
    if (!user) {
      throw new Error(`user not found`);
    }
    const task = await Task.find({ userId });
    if (!task) {
      throw new Error(`task you are trying to view no longer exist`);
    }

    const response = NextResponse.json({ task }, { status: 200 });

    return response;
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    } else {
      return NextResponse.json({ message: "server error" }, { status: 500 });
    }
  }
}
