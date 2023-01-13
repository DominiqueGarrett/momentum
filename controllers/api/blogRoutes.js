const express = require("express");
const router = express.Router();
const {User, Blog, Comment} = require("../../models");
const withAuth = require('../../util/auth.js')

// get all blogs and associated users/comments
router.get("/", (req, res) => {
    Blog.findAll({include:[User, Comment]})
      .then(dbBlogs => {
        res.json(dbBlogs);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  // get one blog with associated user and comment
router.get("/:id", (req, res) => {
    Blog.findByPk(req.params.id,{include:[User, Comment]})
      .then(dbBlog => {
        res.json(dbBlog);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
});

// create new blog post
router.post("/", (req, res) => {
  // check for logged in user
  // if no user in session, send messsage
    if(!req.session.user){
      return res.status(401).json({msg:"Please login!"})
    }
    // create blog post with title and content input by user; user id from session data
    Blog.create({
      title:req.body.title,
      content:req.body.content,
      userId:req.session.user.id
    })
    // date is "createdAt"
      .then(newBlog => {
        res.json(newBlog);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
});

// update post - withAuth fx 
router.put("/:id", (req, res) => {
  if(!req.session.user){
    return res.status(401).json({msg:"Please login!"})
  }
  Blog.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(updatedBlog => {
      res.json(updatedBlog);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.delete("/:id", (req, res) => {
  if(!req.session.user){
    return res.status(401).json({msg:"Please login!"})
  }
    Blog.destroy({
      where: {
        id: req.params.id
      }
    }).then(delBlog => {
      res.json(delBlog);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
  
module.exports = router;