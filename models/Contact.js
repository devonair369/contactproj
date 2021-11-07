const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    phone: {
      type: String,
      require: true
    },
    comment: {
      type: String
    },
    type: {
      type: String,
      default: 'personal'
    }
  },
  { timestamps: true }
);

module.exports = Contact = mongoose.model('contact', ContactSchema);
