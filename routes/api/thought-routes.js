
const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thought-controller');

router.route('/')
.get(getAllThoughts)
.post(addThought);

// /api/thoughts/thoughtId
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughtId/reactions
router.route('/:thoughtId/reactions')
.post(addReaction);

// /api/thoughtId/reactions/reactionId
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;