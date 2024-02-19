import Campaign from "../models/campaign.model.js";
import Review from "../models/review.model.js";

const createCampaign = async (req, res) => {
  try {
    const campaign = new Campaign(req.body);
    await campaign.save();
    res.status(201).send(campaign);
  } catch (error) {
    res
      .status(400)
      .send({ message: "Error while creating campaign", error: error });
  }
};

const getCampaignById = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
      res.status(404).send({ message: "Campaign not found" });
    }
    res.status(200).send(campaign);
  } catch (error) {
    res.status(500).send({ message: "Error while getting campaign", error });
  }
};

const getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find({});
    // .populate("organizer", "name email")
    // todo: add pagination

    res.status(200).send(campaigns);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error while getting campaigns", error: error });
  }
};

const deleteCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findByIdAndDelete(req.params.id);
    if (!campaign) {
      res.status(404).send({ message: "Campaign not found" });
    }
    res.status(200).send({ message: "Campaign deleted" });
  } catch (error) {
    res.status(500).send({ message: "Error while deleting campaign", error });
  }
};

const updateCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!campaign) {
      res.status(404).send({ message: "Campaign not found" });
    }
    res.status(200).send(campaign);
  } catch (error) {
    res.status(500).send({ message: "Error while updating campaign", error });
  }
};

const addReviewToCampaign = async (req, res) => {
  try {
    const { rating, comment, userId } = req.body;

    if (!rating || !comment) {
      res.status(400).send({ message: "Rating and comment are required" });
    }

    const review = new Review({
      user: userId,
      rating,
      comment,
      campaign: req.params.id,
    });

    await review.save();

    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
      res.status(404).send({ message: "Campaign not found" });
    }
    campaign.totalRating = (campaign.totalRating + rating) / 2;
    campaign.reviews.push(review._id);
    await campaign.save();
    return res.status(200).send(campaign);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error while adding review to campaign", error });
  }
};

export {
  createCampaign,
  getCampaigns,
  deleteCampaign,
  updateCampaign,
  getCampaignById,
  addReviewToCampaign,
};
