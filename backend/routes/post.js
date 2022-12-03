const express = require('express');
const router = express.Router();
const {
	createPost,
	getPost,
	likePost,
	commentPost,
	deletePost,
	updatePost,
	deleteComment,
	editComment,
} = require('../controllers/post');
// authorize

// router for create and get post
router.route('/')
  .post(createPost);

// router for update like post
router.route('/like')
  .patch(likePost);

// router for delete and edit post
router.route('/:id')
  .delete(deletePost)
  .patch(updatePost)

// router for comment post
router.route('/comment')
  .post(commentPost)
  .delete(deleteComment)
  .patch(editComment);

module.exports = router;
