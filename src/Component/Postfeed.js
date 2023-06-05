import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

const PostFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "This is the first post.",
      author: "John Doe",
      img: "./logo192.png",
      likes: 0,
      comments: [],
    },
    // Add more post objects as needed
  ]);

  const [commentContent, setCommentContent] = useState("");

  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleComment = (postId, comment) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, comments: [...post.comments, comment] };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleShare = (postId) => {
    // Implement share functionality
    console.log(`Sharing post with ID: ${postId}`);
  };

  return (
    <div>
      {posts.map((post) => (
        <Card key={post.id} className="mb-3">
          <Card.Body>
            <Card.Title>{post.author}</Card.Title>
            <Card.Text>{post.content}</Card.Text>
            <img src="./logo192.png"></img>
            <Card.Text>Likes: {post.likes}</Card.Text>
            <Button variant="primary" onClick={() => handleLike(post.id)}>
              Like
            </Button>
            <div>Cooments :-</div>
            <Card.Body className="mb-3">
              {post.comments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
            </Card.Body>
            <Form.Group controlId={`comment-${post.id}`}>
              <Form.Control
                type="text"
                placeholder="Add a comment..."
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex p-2">
              <Button
                variant="primary"
                onClick={() => handleComment(post.id, commentContent)}
              >
                Post
              </Button>
              <Button className='ms-5' variant="secondary" onClick={() => handleShare(post.id)}>
                Share
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PostFeed;
