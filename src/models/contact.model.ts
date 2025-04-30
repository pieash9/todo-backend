import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
}

const contactSchema = new Schema<IContact>({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
});

export const Contact = mongoose.model<IContact>("Contact", contactSchema);
