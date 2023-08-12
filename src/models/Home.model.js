import mongoose from 'mongoose';

const { Schema } = mongoose;
const { model } = mongoose;

const HomeSchema = new Schema(
  {
    members: [
      {
        member: Schema.Types.ObjectId,
        ref: 'users',
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export default model('homes', HomeSchema);
