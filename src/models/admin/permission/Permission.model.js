import mongoose from 'mongoose';

const { Schema } = mongoose;
const { model } = mongoose;

const PermissionSchema = new Schema(
  {
    key: {
      type: String, // can-view, can-create, can-delete, can-edit, full access
      require: true,
    },
    name: {
      type: String, // can create, can view, can delete, can edit, full access
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    stage_id: {
      type: Schema.Types.ObjectId,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default model('permissions', PermissionSchema);
