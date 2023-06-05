import React, { useState } from 'react';
import "./all.css";

const ProfileSection = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Swati Bisht', followers: [], following: [] },
    { id: 2, name: 'Jane Smith', followers: [], following: [] },
    { id: 3, name: 'Bob Johnson', followers: [], following: [] },
    // Add more user objects as needed
  ]);

  const [posts, setPosts] = useState([
    { id: 1, userId: 1, content: 'This is my first post' },
    { id: 2, userId: 1, content: 'Check out this photo' },
    { id: 3, userId: 2, content: 'Hello, world!' },
    // Add more post objects as needed
  ]);

  // Get the logged-in user ID from your authentication system or state
  const loggedInUserId = 1;

  const currentUser = users.find((user) => user.id === loggedInUserId);

  const followingCount = currentUser.following.length;

  const userPosts = posts.filter((post) => post.userId === loggedInUserId);

  const postCount = userPosts.length;

  return (
    <div className="profile-section">
      <div className="profile-header">
        <h2>{currentUser.name}</h2>
        <div className='d-flex'>
        <p>Following: {followingCount}</p>
        <p className='ms-5'>Post Count: {postCount}</p>
        </div>
      </div>

      <div className="post-container">
        <h2>My Posts</h2>
        {userPosts.map((post) => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSection;
