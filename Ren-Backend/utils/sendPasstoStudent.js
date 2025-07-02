import generatePass from "./bookEventPasses.js"; // Your pass generation function
import awssendEmailWithBuffer from "./awsSendEmail.js"; // The mail sender function

const sendPassesToStudent = async (student, events) => {
  const attachments = [];
  for (const event of events) {
    const passBuffer = await generatePass(student, event); // Generate pass for each event
    attachments.push(passBuffer); // Add the pass buffer to the attachments array
  }

  const emailBody = `
  <div style="font-family: Arial, sans-serif; font-size: 15px; color: #333;">
    <p>Your Registration for <strong>Renaissance 2025</strong> is Confirmed! 🎉</p>

    <p>Dear ${student.name},</p>

    <p>Thank you for registering for Renaissance 2025! Your pass is attached to this email.</p>
    
    <p><strong>⚠ Please note:</strong> Tickets are non-transferable and valid only for the registered participant.</p>
    
    <p>Get ready for an unforgettable experience! We can’t wait to see you at Renaissance 2025! 🎭🎶🔥</p>

    <p>Best Regards, <br>
    <strong>Team Renaissance</strong> <br>
    JECRC Foundation</p>
  </div>
  `;

  await awssendEmailWithBuffer(student.email, "Your Event Pass", emailBody, attachments);
};

export default sendPassesToStudent