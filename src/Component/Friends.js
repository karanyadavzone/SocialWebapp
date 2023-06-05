import React, { useState } from 'react';

const FriendsProfileSection = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', isFollowed: true },
    { id: 2, name: 'Jane Smith', isFollowed: true },
    { id: 3, name: 'Bob Johnson', isFollowed: false },
    // Add more user objects as needed
  ]);

  const [filteredUsers, setFilteredUsers] = useState(
    users.filter((user) => user.isFollowed === true)
  );

  const handleUnfollow = (userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...user, isFollowed: false };
      }
      return user;
    });
    setUsers(updatedUsers);

    const updatedFilteredUsers = filteredUsers.filter(
      (user) => user.id !== userId
    );
    setFilteredUsers(updatedFilteredUsers);
  };

  return (
    <div>
      <h2>Friends Profile Section</h2>
      {filteredUsers.map((user) => (
        <div key={user.id} className="friend-profile">
          <h3>{user.name}</h3>
          <button onClick={() => handleUnfollow(user.id)}>Unfollow</button>
        </div>
      ))}
    </div>
  );
};

export default FriendsProfileSection;
