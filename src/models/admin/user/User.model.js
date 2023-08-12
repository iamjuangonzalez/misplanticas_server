import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;
const { model } = mongoose;

const UserSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    full_name: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String, // hombre, mujer
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    birth_date: {
      type: Date,
      required: true,
    },
    roles: {
      type: Schema.Types.ObjectId,
      ref: 'user_roles',
      default: null,
    },
    card_id: {
      // ???
      type: String,
      required: true,
      unique: true,
    },
    marital_status: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      unique: true,
      default: null,
    },
    phones: [
      {
        description: String, // home, work, etc..
        number: String,
      },
    ],
    environment: {
      type: Schema.Types.ObjectId,
      ref: 'user_environments',
      default: null,
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: 'address',
      default: null,
    },
    avatar: {
      ref: 'files',
      type: Schema.Types.ObjectId,
    },
    isConversion: {
      type: Boolean,
      default: null,
    },
    familyRole: {
      type: String, // tio, hijo, esposo, esposa
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

UserSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  await bcrypt.hash(password, salt);
};

UserSchema.statics.comparePassword = async (password, receivePassword) => {
  await bcrypt.compare(password, receivePassword);
};

export default model('users', UserSchema);
