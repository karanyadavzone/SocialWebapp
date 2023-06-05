import React, { useState } from "react";

const UserProfilesSection = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", followers: [], following: [] },
    { id: 2, name: "Jane Smith", followers: [], following: [] },
    { id: 3, name: "Bob Johnson", followers: [], following: [] },
    // Add more user objects as needed
  ]);

  const handleFollow = (userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        const updatedFollowers = [...user.followers, loggedInUserId];
        return { ...user, followers: updatedFollowers };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const handleUnfollow = (userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        const updatedFollowers = user.followers.filter(
          (followerId) => followerId !== loggedInUserId
        );
        return { ...user, followers: updatedFollowers };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  // Get the logged-in user ID from your authentication system or state
  const loggedInUserId = 1;

  // Filter the users based on the profiles that the logged-in user follows
  const friends = users.filter((user) =>
    user.followers.includes(loggedInUserId)
  );

  return (
    <div className="d-flex">
      <div className="col-md-4">
        <h2>All User Profiles</h2>
        {users.map((user) => (
          <div key={user.id} className="user-profile">
            <h3>{user.name}</h3>
            {user.followers.includes(loggedInUserId) ? (
              <button onClick={() => handleUnfollow(user.id)}>Unfollow</button>
            ) : (
              <button onClick={() => handleFollow(user.id)}>Follow</button>
            )}
          </div>
        ))}
      </div>
      <div>
        <h2>Friends Section</h2>
        {friends.map((friend) => (
          <div key={friend.id} className="friend-profile">
            <h3>{friend.name}</h3>
            <button onClick={() => handleUnfollow(friend.id)}>Unfollow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfilesSection;
