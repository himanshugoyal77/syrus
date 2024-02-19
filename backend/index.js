import express from "express";
import connectDB from "./db/connect.js";
import {
  createCampaign,
  getCampaigns,
  deleteCampaign,
  updateCampaign,
  getCampaignById,
  addReviewToCampaign,
} from "./controller/campaign.controller.js";
import { createUser } from "./controller/user.controller.js";

const app = express();
const PORT = process.env.PORT || 8800;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// campaign routes
app.post("/campaign/new", createCampaign);
app.get("/campaigns", getCampaigns);
app.get("/campaign/:id", getCampaignById);
app.delete("/campaign/:id", deleteCampaign);
app.put("/campaign/:id", updateCampaign);
app.put("/campaign/add-review/:id", addReviewToCampaign);

// user routes
app.post("/user/new", createUser);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
