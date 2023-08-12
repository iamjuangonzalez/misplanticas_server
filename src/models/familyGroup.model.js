import mongoose from 'mongoose';

const { Schema } = mongoose;
const { model } = mongoose;

const FamilyGroupSchema = new Schema(
  {
    name: String, // Flia. Benito Diaz
    members: [
      {
        user_id: Schema.Types.ObjectId,
        description: String, // esposa, esposo, hijo, hija, abuelo, nieto
        ref: 'users',
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default model('family_groups', FamilyGroupSchema);
