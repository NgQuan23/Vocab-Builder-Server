const wordController = require('../controllers/wordController');

const wordRoute = (app) => {
    // Routes for vocabulary items
    app.route('/vocabs')
        .get(wordController.viewAllVocabs) // Get all vocab items
        .post(wordController.addVocab) // Add a new vocab item
        .delete(wordController.deleteAllVocabs); // Delete all vocab items

    app.route('/vocabs/:id')
        .get(wordController.viewVocab) // Get a vocab item by ID
        .put(wordController.editVocab) // Edit a vocab item by ID
        .delete(wordController.deleteVocab); // Delete a vocab item by ID
};

// Export the router
module.exports = wordRoute;