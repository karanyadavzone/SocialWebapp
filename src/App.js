import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./Component/RegistrationForm";
import LoginForm from "./Component/LoginForm";
import Home from "./Component/Home";
import Header from './Component/Header';
import FriendsProfileSection from "./Component/Friends";
import UserProfilesSection from "./Component/ALlProfile";
import ProfileSection from "./Component/MyProfile";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
        <Header />
          <Routes>
            <Route path="/" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/friends" element={<FriendsProfileSection />} /> */}
            <Route path="/allprofile" element={<UserProfilesSection />} />
            <Route path="/profile" element={<ProfileSection />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
