import mongoose, { Document, Model, Schema } from "mongoose";

// Define the interface for the User document
interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

// Define the schema for the User model
const userSchema: Schema<IUser> = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Define the User model
const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
