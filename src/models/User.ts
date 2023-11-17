import mongoose from 'mongoose'

export interface Users extends mongoose.Document {
  name: string
  email: string
  password: string
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema<Users>({
  name: {
    type: String,
    required: [true, 'The name is required.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  email: {
    type: String,
    required: [true, "The email is required."],
    maxlength: [255, "Email cannot be more than 255 characters"],
  },
  password: {
    type: String,
    required: [true, "The email is required."],
    maxlength: [255, "Password cannot be more than 255 characters"],
  },
}, {
  timestamps: true
})

export default mongoose.models.User || mongoose.model<Users>('User', UserSchema);
