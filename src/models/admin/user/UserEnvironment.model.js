import mongoose from 'mongoose';

const { Schema } = mongoose;
const { model } = mongoose;

const UserEnvironmentSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      require: true,
    },
    networkAncestorHierarchy: [
      {
        id: Schema.Types.ObjectId,
        description: String, // gb, sub_red, red, church, etc..
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export default model('user_environment', UserEnvironmentSchema);
