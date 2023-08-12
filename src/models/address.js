import mongoose from 'mongoose';

const { Schema } = mongoose;
const { model } = mongoose;

const AddressSchema = new Schema(
  {
    street: {
      type: String,
      required: true,
    },
    neighborhood: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    city: {
      type: Schema.Types.ObjectId,
      ref: 'city',
      required: true,
    },
    details: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default model('addresses', AddressSchema);
