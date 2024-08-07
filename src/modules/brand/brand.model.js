const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      min: 2,
    },
    slug:{
      type: String,
      unique : true
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    homeSection: Boolean,
    image: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, // Change this line
      ref: "User",
      default: null,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId, // Change this line
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt keys area auto-added
    autoCreate: true, // create the table
    autoIndex: true, // indexing
  }
);

const BrandModel = mongoose.model("Brand", BrandSchema);

module.exports = BrandModel;
