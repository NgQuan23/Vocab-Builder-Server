const vocabModel = require('../models/wordModel');

// Function to retrieve all vocabulary items
const viewAllVocabs = async (req, res) => {
    try {
        let vocabs = await vocabModel.find({}).sort({ _id: -1 });
        res.json(vocabs); // Return the data as JSON
    } catch (err) {
        res.status(500).send(err); // Send error response
    }
};

// Function to add a new vocabulary item
const addVocab = async (req, res) => {
    try {
        let vocab = req.body; // Get input data
        await vocabModel.create(vocab); // Save to DB
        res.json({ "message": "Add vocab succeed!" }); // Success message
    } catch (err) {
        res.status(500).send(err); // Send error response
    }
};

// Function to delete all vocabulary items
const deleteAllVocabs = async (req, res) => {
    try {
        await vocabModel.deleteMany(); // Delete all items
        res.json({ "message": "Delete all vocabs succeed!" }); // Success message
    } catch (err) {
        res.status(500).send(err); // Send error response
    }
};

// Function to retrieve a single vocabulary item by ID
const viewVocab = async (req, res) => {
    try {
        let id = req.params.id; // Get ID from request parameters
        let vocab = await vocabModel.findById(id); // Find item by ID
        res.json(vocab); // Return the item
    } catch (err) {
        res.status(500).send(err); // Send error response
    }
};

// Function to edit a vocabulary item by ID
const editVocab = async (req, res) => {
    try {
        let id = req.params.id; // Get ID from request parameters
        let data = req.body; // Get updated data
        await vocabModel.findByIdAndUpdate(id, data); // Update item
        res.json({ "message": "Edit vocab succeed!" }); // Success message
    } catch (err) {
        res.status(500).send(err); // Send error response
    }
};

// Function to delete a vocabulary item by ID
const deleteVocab = async (req, res) => {
    try {
        let id = req.params.id; // Get ID from request parameters
        await vocabModel.findByIdAndDelete(id); // Delete item
        res.json({ "message": "Delete vocab succeed!" }); // Success message
    } catch (err) {
        res.status(500).send(err); // Send error response
    }
};

// Export the functions
module.exports = {
    viewAllVocabs,
    addVocab,
    deleteAllVocabs,
    viewVocab,
    editVocab,
    deleteVocab
};