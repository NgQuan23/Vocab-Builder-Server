const mongoose = require('mongoose');

// Define the schema for vocabulary items
const wordSchema = new mongoose.Schema(
    {
        english: {
            type: String,
            required: true
        },
        german: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false   // Ignore the "__v" field
    }
);

// Create the model based on the schema
const wordModel = mongoose.model('vocabs', wordSchema);  // 'vocabs' is the collection name

// Export the model
module.exports = wordModel;