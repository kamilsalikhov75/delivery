import mongoose from 'mongoose';

const DeliverySchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'new',
    },
    worker: {
      type: String,
      default: '',
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

export const DeliveryModel = mongoose.model('Delivery', DeliverySchema);
