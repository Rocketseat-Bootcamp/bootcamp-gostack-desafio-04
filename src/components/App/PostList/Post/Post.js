import React from "react";
import "./Post.css";

function PostHeader({
  post: {
    date,
    author: { name, avatar }
  }
}) {
  return (
    <div className="header-post">
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="profile">
        <div className="name-profile">{name}</div>
        <div className="dt-post">{date}</div>
      </div>
    </div>
  );
}

function PostComments({
  comment: {
    content,
    author: { name, avatar }
  }
}) {
  return (
    <div className="post-comment-component">
      <div className="post-comment-header">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="post-comment-content">
        <div className="profile">{name}: </div>
        <div className="content">{content}</div>
      </div>
    </div>
  );
}

function Post({ post }) {
  return (
    <div className="post-component">
      <PostHeader post={post} />
      <div className="publication">{post.content}</div>
      <hr />
      {post.comments.map(comment => (
        <PostComments key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default Post;
