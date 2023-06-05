import React from "react";
import PostsFeed from "./Postfeed";
import FriendsProfileSection from "./Friends";
const Home = () => {
  return (
    <div className="container">
      <h2>Home</h2>
      {/* Add your home page content here */}
      <div className="row">
        <div className="col-md-8">
          {/* Posts feed */}
          <PostsFeed />
          {/* <FriendsProfileSection/> */}
          {/* Render posts dynamically here */}
        </div>
        <div className="col-md-4">
          {/* Sidebar */}
          {/* Add sidebar content here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
