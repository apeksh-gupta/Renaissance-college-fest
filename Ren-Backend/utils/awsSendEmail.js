import { SESClient, SendRawEmailCommand } from "@aws-sdk/client-ses";
import dotenv from "dotenv";


dotenv.config();


const sesClient = new SESClient({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const awssendEmailWithBuffer = async (to, subject, html, attachments) => {
  try {
    if (!to || !subject || !html || !attachments || attachments.length === 0) {
      throw new Error("Missing required email parameters or attachments.");
    }

    const boundary = "----=_Part_" + new Date().getTime();
    const emailBody = [
      `From: "Team Renaissance" <info@jecrcrenaissance.co.in>`,
      `To: ${to}`,
      `Subject: ${subject}`,
      `MIME-Version: 1.0`,
      `Content-Type: multipart/mixed; boundary="${boundary}"`,
      "",
      `--${boundary}`,
      `Content-Type: text/html; charset="UTF-8"`,
      "Content-Transfer-Encoding: 7bit",
      "",
      html,
      "",
    ];

    // Add each attachment
    attachments.forEach((attachment, index) => {
      const filename = `pass-${index + 1}.png`;
      emailBody.push(
        `--${boundary}`,
        `Content-Type: image/png; name="${filename}"`,
        `Content-Transfer-Encoding: base64`,
        `Content-Disposition: attachment; filename="${filename}"`,
        "",
        attachment.toString("base64"),
        ""
      );
    });

    emailBody.push(`--${boundary}--`);
    const rawEmail = emailBody.join("\n");

    const params = {
      RawMessage: { Data: rawEmail },
    };

    const command = new SendRawEmailCommand(params);
    const result = await sesClient.send(command);
    console.log("Email sent successfully:", result);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email sending failed");
  }
};

export default awssendEmailWithBuffer;
