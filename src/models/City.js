import mongoose from 'mongoose';

const { Schema } = mongoose;
const { model } = mongoose;

const CitySchema = new Schema(
  {
    region: {
      type: String,
      required: true,
    },
    c_digo_dane_del_departamento: {
      type: String,
      required: true,
    },
    departamento: {
      type: String,
      required: true,
    },
    c_digo_dane_del_municipio: {
      type: String,
      required: true,
    },
    municipio: {
      type: String,
      required: true,
    },
    pais: {
      type: Schema.Types.ObjectId,
      ref: 'countries',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default model('cities', CitySchema);
