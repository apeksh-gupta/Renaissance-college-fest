import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ['Technical','Splash','Cultural'] ,required: true },
  Paid: { type: Boolean, default: false }, // Renamed 'Paid' to 'isPaid' for consistency
  day: { type: Number, required: true },
  venue: { type: String, required: true },
  date: { type: String, required: true }, // Example: "Thursday, 6 March"
  time: { type: String, required: true } // Example: "2:30 PM"
});

const Event = mongoose.model("Event", eventSchema);
export default Event;