import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export const getTokenData = (req: NextRequest) => {
  try {
    const token = req.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET!);
    return decodedToken._id;
  } catch (error: any) {
    throw new Error(error.mesage);
  }
};
