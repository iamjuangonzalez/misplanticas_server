import mongoose from 'mongoose';

const { Schema } = mongoose;
const { model } = mongoose;

const CountrySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  code: String,
  status: {
    type: Boolean,
    default: true,
  },
});

export default model('countries', CountrySchema);
