import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    branch: { type: String, required: true }, // Changed from Branch to branch
    Year: { type: Number, required: true },   // Changed from Year to year
    isPaid: { type: Boolean, default: false, required:true},
    password: {type : String},
    token : {type:Number, default: 2},
    events: [{ type: mongoose.Schema.Types.ObjectId, default: [] }] 
});



const Student = mongoose.model('Student', studentSchema);
export default Student;