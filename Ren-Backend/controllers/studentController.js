import Student from "../models/student.js";
import jwt from "jsonwebtoken";

export const loginStudent = async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ email });

    if (!student || student.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({
      message: "Login successful",
      token,
      student: {
        name: student.name,
        email: student.email,
        token: student.token,
        events: student.events,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
