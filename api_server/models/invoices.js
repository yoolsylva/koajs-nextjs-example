import mongoose from 'mongoose';

const { Schema } = mongoose;

// To fix https://github.com/Automattic/mongoose/issues/4291
mongoose.Promise = global.Promise;

const invoiceSchema = new Schema({
  createdDate: {
    type: Date,
    //required: true
  },
  comment: {
    type: String
  },
  type: {
    type: String,
    required: true
  },
  price: Number
});

export default mongoose.model('Invoice', invoiceSchema);
