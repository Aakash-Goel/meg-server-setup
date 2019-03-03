const mongoose = require('mongoose');

/**
 * Define mongoose schema
 * @private
 */
const Schema = mongoose.Schema;

/**
 * Generate new message Schema
 */
const messageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

/**
 * Define model
 * @public
 */
module.exports = mongoose.model('Message', messageSchema);
