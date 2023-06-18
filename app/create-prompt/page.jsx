"use client";

import Form from "@components/Form";
import CreatPromptHooks from "@hooks/create-prompt-hooks";

const CreatePrompt = () => {
  const [post, setPost, submitting, createPrompt] = CreatPromptHooks();
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
