import React, { useState } from "react";
import { post } from "../api/request";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await post("/posts", { title, body });
      alert("文章创建成功");
      navigate("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || error.message || "创建文章失败";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>创建新文章</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <div>
          <label htmlFor="title">标题：</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div>
          <label htmlFor="body">内容：</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            style={{ width: "100%", height: "200px", padding: "0.5rem" }}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: loading ? "#cccccc" : "#4CAF50",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "提交中..." : "提交"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
