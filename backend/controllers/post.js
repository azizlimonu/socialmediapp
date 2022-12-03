const Post = require("../models/Post");
const User = require("../models/User");
const cloudinary = require("cloudinary").v2;
const { StatusCodes } = require("http-status-codes");

// Create Post
const createPost=async(req,res)=>{
   res.send("Hello world")
};
// Get Post
const getPost=async(req,res)=>{
   res.send("Hello world")
};
// Like Post
const likePost=async(req,res)=>{
   res.send("Hello world")
};
// Delete Post
const deletePost=async(req,res)=>{
   res.send("Hello world")
};
// Update Post
const updatePost=async(req,res)=>{
   res.send("Hello world")
};
// Comment Post
const commentPost=async(req,res)=>{
   res.send("Hello world")
};
// Delete Comment
const deleteComment=async(req,res)=>{
   res.send("Hello world")
};
// Edit Comment
const editComment=async(req,res)=>{
   res.send("Hello world")
};

module.exports = {
	createPost,
	getPost,
	likePost,
	commentPost,
	deletePost,
	updatePost,
	deleteComment,
	editComment,
};