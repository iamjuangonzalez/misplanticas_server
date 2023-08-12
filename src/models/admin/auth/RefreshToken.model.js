import mongoose from 'mongoose';
import moment from 'moment-timezone';

const { Schema } = mongoose;
const { model } = mongoose;

const AppRefreshToken = new Schema(
  {
    env: {
      ref: 'app_environments',
      type: Schema.Types.ObjectId,
    },
    token: String,
    expires: String,
    createdByIp: String,
    revoked: String,
    revokedByIp: String,
    replacedByToken: String,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

AppRefreshToken.virtual('isExpired').get(() => moment().unix() >= this.expires);

AppRefreshToken.virtual('isActive').get(() => !this.revoked && !this.isExpired);

export default model('adgency_refresh_tokens', AppRefreshToken);
