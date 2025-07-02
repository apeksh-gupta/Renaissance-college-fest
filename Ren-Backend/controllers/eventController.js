import Pass from "../models/pass.js";
import Event from "../models/event.js";
import Student from "../models/student.js";
import sendPassesToStudent from "../utils/sendPasstoStudent.js"; // To send passes via email

// export const getAllEvents = async (req, res) => {
//   try {
//     const events = await Event.find();

//     // Categorize events
//     const categorizedEvents = {
//       technical: events.filter((event) => event.category === "Technical"),
//       splash: events.filter((event) => event.category === "Splash"),
//       cultural: events.filter((event) => event.category === "Cultural"),
//     };

//     res.status(200).json(categorizedEvents);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

export const getTokenCount = async (req, res) => {
  try{
    const student = req.student;
    res.status(200).json({token: student.token});
  }
  catch(error){
    res.status(500).json({message: "Server error", error});
  }
}

export async function registerForEvent(req, res) {
  try {
    const { eventId } = req.body;
    const student = req.student; // Authenticated student from middleware

    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found." });
    }

    if (!event.Paid && student.token <= 0) {
      return res
        .status(400)
        .json({ message: "No tokens left for free events." });
    }

    if (student.events.includes(eventId)) {
      return res
        .status(400)
        .json({ message: "You have already registered for this event." });
    }

    const registeredEvents = await Event.find({ _id: { $in: student.events } });

    console.log("Registered events:", registeredEvents.map(e => e.category));

    const hasSplashEvent = registeredEvents.some(
      (e) => e.category.toLowerCase().trim() === "splash"
    );

    if (event.category.toLowerCase().trim() === "splash" && hasSplashEvent) {
      return res
        .status(400)
        .json({ message: "You can only register for one splash event." });
    }

    const hasTechnicalEvent = registeredEvents.some(
      (e) => e.category.toLowerCase().trim() === "technical"
    );

    if (event.category.toLowerCase().trim() === "technical" && hasTechnicalEvent) {
      return res
        .status(400)
        .json({ message: "You can only register for one technical event." });
    }



    if (!event.Paid) {
      student.token -= 1;
      student.events.push(eventId);
      await student.save();

      const allRegisteredEvents = await Event.find({
        _id: { $in: student.events },
      });
      await sendPassesToStudent(student, allRegisteredEvents);

      return res
        .status(200)
        .json({
          message:
            "Successfully registered for the event. Pass sent via email.",
          student: {
            name: student.name,
            email: student.email,
            token: student.token,
            events: student.events,
          },
        });
    } else {
      res
        .status(200)
        .json({ message: "Event is paid, token won't be deducted" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error registering for the event." });
  }
}
