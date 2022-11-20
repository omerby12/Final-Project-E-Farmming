import mongoose from 'mongoose';

const subOrderSchema = mongoose.Schema(
  {
    orderItems: [
      {
        farmerName: { type: String, required: true },
        farmerImage: { type: String, required: true },
        productName: { type: String, required: true },
        productImage: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        farmerProduct: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'FarmerProduct',
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const SubOrder = mongoose.model('SubOrder', subOrderSchema);

export default SubOrder;
