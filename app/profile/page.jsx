"use client";

import Profile from "@components/Profile";
import ProfileHooks from "@hooks/profile-hooks";

const MyProfile = () => {
  const [myPosts, handleEdit, handleDelete] = ProfileHooks();
  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
