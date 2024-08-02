import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import { getTokenData } from "@/helpers/getTokenData";
import Task from "@/models/taskModel";

connect();

export async function POST(req: NextRequest, { params }: any) {
  try {
    const userId = await getTokenData(req);

    const user = await User.findById(userId);
    if (!user) {
      throw new Error(`user not found`);
    }
    const task = await Task.findById(params.id);
    if (!task) {
      throw new Error(`task you are trying to edit no longer exist`);
    }
    if (task.userId.toString() !== userId.toString()) {
      throw new Error(
        `user trying to delete the task is not creater of the task`
      );
    }

    await Task.findByIdAndDelete(params.id);
    const response = NextResponse.json(
      { message: "Task deleted" },
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
