import Campaign from "../models/campaign.model.js";

const createCampaign = async (req, res) => {
  try {
    const campaign = new Campaign(req.body);
    await campaign.save();
    res.status(201).send(campaign);
  } catch (error) {
    res.status
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

export {
  createCampaign,
  getCampaigns,
  deleteCampaign,
  updateCampaign,
  getCampaignById,
};
