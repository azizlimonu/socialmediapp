const Post = require("../models/Post");
const User = require("../models/User");
const cloudinary = require("cloudinary").v2;
const { StatusCodes } = require("http-status-codes");

// Create Post
const createPost=async(req,res)=>{};
// Get Post
const getPost=async(req,res)=>{};
// Like Post
const likePost=async(req,res)=>{};
// Delete Post
const deletePost=async(req,res)=>{};
// Update Post
const updatePost=async(req,res)=>{};
// Comment Post
const commentPost=async(req,res)=>{};
// Delete Comment
const deleteComment=async(req,res)=>{};
// Edit Comment
const editComment=async(req,res)=>{};

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