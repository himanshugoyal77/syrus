import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      minLength: 25,
    },
    startDate: {
      type: Date,
    },
    time: {
      type: Date,
    },
    venue: {
      type: String,
      required: true,
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    contact: {
      type: String,
    },
    price: {
      type: Number,
    },
    coords: {
      type: [Number],
    },
    image: {
      type: [String],
    },
    participants: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Campaign = mongoose.model("campaign", campaignSchema);

export default Campaign;
