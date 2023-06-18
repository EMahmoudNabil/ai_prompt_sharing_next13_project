"use client";

import Form from "@components/Form";
import UpdatePromptHooks from "@hooks/update-prompt-hooks";

const UpdatePrompt = () => {
  const [post, setPost, submitting, updatePrompt] = UpdatePromptHooks();

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdatePrompt;
