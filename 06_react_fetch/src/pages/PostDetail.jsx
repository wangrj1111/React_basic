import React, { useState, useEffect } from "react";
import { get, put } from "../api/request";
import { useParams, useNavigate, Link } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState(null);

  useEffect(() => {
    get(`/posts/${id}`)
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>正在加载文章...</div>;
  }

  if (error) {
    return <div>加载错误: {error.message}</div>;
  }

  if (!post) {
    return <div>文章未找到</div>;
  }

  const handleEdit = () => {
    setIsEditing(true);
    setEditedPost({ ...post });
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      await put(`/posts/${id}`, editedPost);
      setPost(editedPost);
      setIsEditing(false);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedPost(null);
  };

  return (
    <div>
      <button onClick={() => navigate(-1)}>返回</button>
      {!isEditing ? (
        <>
          <button onClick={handleEdit}>编辑</button>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      ) : (
        <>
          <button onClick={handleSave}>保存</button>
          <button onClick={handleCancel}>取消</button>
          <div>
            <input
              type="text"
              value={editedPost.title}
              onChange={(e) =>
                setEditedPost({ ...editedPost, title: e.target.value })
              }
              style={{ width: "100%", marginBottom: "10px", fontSize: "1.5em" }}
            />
          </div>
          <div>
            <textarea
              value={editedPost.body}
              onChange={(e) =>
                setEditedPost({ ...editedPost, body: e.target.value })
              }
              style={{ width: "100%", minHeight: "200px" }}
            />
          </div>
        </>
      )}
      <Link to="/">返回文章列表</Link>
    </div>
  );
};

export default PostDetail;
