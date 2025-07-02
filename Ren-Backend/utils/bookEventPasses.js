import { createCanvas, registerFont } from "canvas";
import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Create __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load and register the custom font
const fontPath = path.join(__dirname, "../armageda/Armageda Wide.ttf");
if (fs.existsSync(fontPath)) {
  registerFont(fontPath, { family: "Armageda Wide" });
}

async function generatePass(student, event) {
  const templatePath = path.join(__dirname, "../images/ren ticket-template 2-02.png");
  const outputPath = path.join(__dirname, `../passes/pass-${student.name}-${event.name}.png`);

  // Create a canvas for text overlay
  const canvas = createCanvas(1411, 530);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.font = 'bold 30px "Armageda Wide"';
  ctx.fillText(`Name: ${student.name}`, 600, 220);
  ctx.fillText(`Event: ${event.name}`, 600, 270);
  ctx.fillText(`Date: ${event.date}`, 600, 320);
  ctx.fillText(`Time: ${event.time}`, 1050, 320);  // Positioned to the right of Date
  ctx.fillText(`Venue: ${event.venue}`, 600, 370);


  const textBuffer = canvas.toBuffer();

  // Combine the template and text, return as buffer (instead of saving it)
  const passBuffer = await sharp(templatePath)
    .composite([{ input: textBuffer, top: 0, left: 0 }])
    .png()
    .toBuffer();  // Return the buffer directly

  return passBuffer;  // Return the path of the generated pass
}

export default generatePass;
