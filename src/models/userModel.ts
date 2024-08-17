import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  sub: string;
  name: string;
  email: string;
  image: string;
  graph?: string;
  productiveHours?: number;
  nonProductiveHours?: number;
  idleHours?: number;
  userLevel?: number;
  friends?: mongoose.Types.ObjectId[];
  recentVisitedSites?: string[];
  userTodo?: { date: Date; tasks: string[] }[];
}

const userSchema: Schema<IUser> = new Schema({
  sub: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
  graph: {
    type: String,
    default: "Idle",
    enum: ["Productive", "Non-Productive", "Idle"],
  },
  productiveHours: { type: Number, default: 0 },
  nonProductiveHours: { type: Number, default: 0 },
  idleHours: { type: Number, default: 0 },
  userLevel: { type: Number, required: true, default: 0 },
  friends: [{ type: Schema.Types.ObjectId }],
  recentVisitedSites: { type: [String], default: [] },
  userTodo: { type: [{ date: Date, tasks: [String] }], default: [] },
});

//defining model
const UserModel =
  (mongoose.models.User as mongoose.Model<IUser>) ||
  mongoose.model<IUser>("User", userSchema);

export default UserModel;
