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
    startTime: {
      type: String,
    },
    endDate: {
      type: Date,
    },
    endTime: {
      type: String,
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
    totalRating: {
      type: Number,
      default: 4,
    },
    reviews: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Review",
    },
  },
  {
    timestamps: true,
  }
);

const Campaign = mongoose.model("Campaign", campaignSchema);

export default Campaign;
