import mongoose, { Schema, Document } from "mongoose";

export interface ITodo extends Document {
  title: string;
  completed: boolean;
  creatorId: mongoose.Types.ObjectId;
}

const todoSchema = new Schema<ITodo>({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export const Todo = mongoose.model<ITodo>("Todo", todoSchema);
