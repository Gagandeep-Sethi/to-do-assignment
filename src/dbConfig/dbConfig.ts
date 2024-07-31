import mongoose from "mongoose";
//mongoose.connection.setMaxListeners(20);
export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URI as string);
    const connection = mongoose.connection;
    connection.on("connected", () => {});
    connection.on("error", (err) => {
      process.exit();
    });
  } catch (error) {}
}
