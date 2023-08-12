import mongoose from 'mongoose';

const { Schema } = mongoose;
const { model } = mongoose;

const StageSchema = new Schema(
  {
    name: {
      type: String,
      defualt: null,
    },
    stage: String, // church, red, celula, ministerio, grupo, gb, etc
    ancestors: [],
    slug: String, // 'grupo-biblico
    code: String,
    parent: {
      type: Schema.Types.ObjectId,
      ref: 'stages',
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default model('stages', StageSchema);
