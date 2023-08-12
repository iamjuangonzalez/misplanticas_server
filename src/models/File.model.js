import mongoose from 'mongoose';

const { Schema } = mongoose;
const { model } = mongoose;

const FileSchema = new Schema(
  {
    name: String,
    type: 'String', // image, file, etc..
    size: String,
    url: String,
    project: {
      type: Schema.Types.ObjectId,
      ref: 'projects',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default model('files', FileSchema);
