import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  status: string;
  description: string;
  priority: string;
  deadline: Date;
}

const TaskSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  priority: {
    type: String,
  },
  deadline: {
    type: Date,
  },
});

export default mongoose.models.Task ||
  mongoose.model<ITask>("Task", TaskSchema);
