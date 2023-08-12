import mongoose from 'mongoose';

const { Schema } = mongoose;
const { model } = mongoose;

const ProjectSchema = new Schema(
  {
    name: String,
    description: String,
    account_owners: [
      {
        user: Schema.Types.ObjectId,
        ref: 'users',
      },
    ],
    logo: {
      type: Schema.Types.ObjectId,
      ref: 'files',
    },
    active: {
      type: Boolean,
      default: true,
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: 'addresses',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default model('projects', ProjectSchema);
