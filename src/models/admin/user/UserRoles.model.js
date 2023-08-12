import mongoose from 'mongoose';

const { Schema } = mongoose;
const { model } = mongoose;

const UserRolesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
    description: String,
    permissions: [
      {
        permission_id: {
          type: Schema.Types.ObjectId,
          ref: 'permissions',
        },
      },
    ],
    scope: [
      {
        name: String, // alcance de los permisos
        key: String,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export default model('roles', UserRolesSchema);
