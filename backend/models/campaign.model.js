import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema(
  {
    eventName: {
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
      type: String,
    },
    enteryFees: {
      type: Number,
    },
    coords: {
      type: [Number],
    },
    images: {
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

    contact: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Campaign = mongoose.model("Campaign", campaignSchema);

export default Campaign;
